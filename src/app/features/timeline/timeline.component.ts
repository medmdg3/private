import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TIMELINE } from './timeline.data';
import { TimelineEvent, TimelinePhoto, TimelineVideo, TimelineMedia } from './timeline.model';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {
  events: TimelineEvent[] = TIMELINE;

  // Interaction state
  active: TimelineEvent | null = null;
  hovered: TimelineEvent | null = null;
  useTemporalSpacing = true; // always on
  descending = false; // default newest -> oldest

  // Temporal spacing controls
  readonly nodeHeightPx = 0; // approximate visual node height
  readonly temporalMultiplier = 1; // px per day difference
  readonly maxTemporalGapPx = 650; // cap long time gaps and show a break marker

  // Tag filtering state
  selectedTags = new Set<string>();

  // Photo zoom level per URL: 0 (default), 1 (big), 2 (bigger)
  private photoZoom = new Map<string, number>();
  // Per-event media index for carousel navigation
  private mediaIndex = new Map<string, number>();
  // (legacy) photo aspect map no longer used

  // Media helpers (unified for photo/video)
  public getMediaSrc(m: string | TimelineMedia | TimelinePhoto | TimelineVideo): string {
    if (typeof m === 'string') return m;
    return (m as any)?.src;
  }

  isMediaKeepRatio(m: string | (TimelineMedia | TimelinePhoto | TimelineVideo)): boolean {
    return typeof m === 'object' && !!(m as any)?.keepRatio;
  }

  constructor() {
    // Seed initial photo sizes from data (if provided)
    for (const e of this.events) {
      const media = this.getEventMedia(e);
      for (const m of media) {
        if (typeof m === 'object' && (m.initialSize === 1 || m.initialSize === 2)) {
          const key = this.getMediaSrc(m);
          if (key) this.photoZoom.set(key, m.initialSize);
        }
      }
    }
  }

  ngOnInit(): void {
    this.ensureActiveInFiltered();
  }
  // Base color palette (also used for tag colors)
  readonly colorMap: Record<string, string> = {
  indigo: '#4f46e5',
  blue: '#3b82f6',
  cyan: '#06b6d4',
  teal: '#14b8a6',
  green: '#22c55e',
  lime: '#84cc16',
  yellow: '#eab308',
  amber: '#f59e0b',
  orange: '#f97316',
  red: '#ef4444',
  rose: '#f43f5e',
  pink: '#ec4899',
  fuchsia: '#d946ef',
  purple: '#a855f7',
  violet: '#8b5cf6',
};

  // Build unique tag list from events
  get availableTags(): string[] {
    const set = new Set<string>();
    for (const e of this.events) e.tags?.forEach((t) => set.add(t));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }

  // Rarity filter state (multi-select)
  raritySelected = new Set<'normal' | 'golden' | 'diamond'>();

  isDisplayed(e: TimelineEvent): boolean {
    // Hover has priority over click; if hovering something, show that; otherwise show the active one
    return this.hovered ? this.hovered === e : this.active === e;
  }

  toggle(e: TimelineEvent): void {
    this.active = this.active === e ? null : e;
  }

  onEnter(e: TimelineEvent): void {
    this.hovered = e;
  }

  onLeave(e: TimelineEvent): void {
    if (this.hovered === e) this.hovered = null;
  }

  toggleTag(tag: string): void {
    if (this.selectedTags.has(tag)) this.selectedTags.delete(tag);
    else this.selectedTags.add(tag);
    // Clear hover/active if they no longer pass the filter
    if (this.active && !this.filteredEvents.includes(this.active)) this.active = null;
    if (this.hovered && !this.filteredEvents.includes(this.hovered)) this.hovered = null;
    this.ensureActiveInFiltered();
  }

  clearFilters(): void {
    this.selectedTags.clear();
    this.ensureActiveInFiltered();
  }

  // Media interactions (zoom)
  getMediaZoom(m: string | (TimelineMedia | TimelinePhoto | TimelineVideo)): number {
    const key = this.getMediaSrc(m);
    return this.photoZoom.get(key) ?? 1;
  }

  onMediaClick(event: MouseEvent, m: string | (TimelineMedia | TimelinePhoto | TimelineVideo)): void {
    // Cycle: 0 -> 1 -> 2 -> 0
    event.stopPropagation();
    const key = this.getMediaSrc(m);
    const next = (this.getMediaZoom(m) + 1) % 3;
    // Keep state simple; do not clear to avoid flicker at 0
    this.photoZoom.set(key, next);
  }

  isMediaVideo(m: string | (TimelineMedia | TimelinePhoto | TimelineVideo)): boolean {
    if (typeof m === 'object' && 'isVideo' in (m as any)) return !!(m as any).isVideo;
    const src = this.getMediaSrc(m) || '';
    return /\.(mp4|webm|ogg|mov)$/i.test(src);
  }

  // Resolve media list for an event (prefers unified `media`, falls back to photos+videos)
  getEventMedia(e: TimelineEvent): Array<string | TimelineMedia> {
    if (e.media && e.media.length) return e.media as Array<string | TimelineMedia>;
    const list: Array<string | TimelineMedia> = [];
    (e.photos ?? []).forEach((p) => list.push(p as any));
    (e.videos ?? []).forEach((v) => {
      if (typeof v === 'string') list.push({ src: v, isVideo: true });
      else list.push({ ...v, isVideo: true });
    });
    return list;
  }

  // Media carousel helpers
  private evKey(e: TimelineEvent): string { return `${e.date}__${e.title}`; }

  getCurrentMediaIndex(e: TimelineEvent): number {
    return this.mediaIndex.get(this.evKey(e)) ?? 0;
  }

  getCurrentMedia(e: TimelineEvent): string | TimelineMedia | undefined {
    const media = this.getEventMedia(e);
    if (!media.length) return undefined;
    const idx = this.getCurrentMediaIndex(e) % media.length;
    return media[idx];
  }

  hasMultipleMedia(e: TimelineEvent): boolean {
    return (this.getEventMedia(e)?.length || 0) > 1;
  }

  nextMedia(e: TimelineEvent): void {
    const media = this.getEventMedia(e);
    if (!media.length) return;
    const key = this.evKey(e);
    const curr = this.getCurrentMediaIndex(e);
    this.mediaIndex.set(key, (curr + 1) % media.length);
  }

  prevMedia(e: TimelineEvent): void {
    const media = this.getEventMedia(e);
    if (!media.length) return;
    const key = this.evKey(e);
    const curr = this.getCurrentMediaIndex(e);
    this.mediaIndex.set(key, (curr - 1 + media.length) % media.length);
  }

  // Rarity helpers
  private getEventRarity(e: TimelineEvent): 'normal' | 'golden' | 'diamond' {
    if (e.diamond) return 'diamond';
    if (e.golden) return 'golden';
    return 'normal';
  }

  toggleRarity(r: 'normal' | 'golden' | 'diamond'): void {
    if (this.raritySelected.has(r)) this.raritySelected.delete(r);
    else this.raritySelected.add(r);
    this.ensureActiveInFiltered();
  }

  clearRarity(): void {
    this.raritySelected.clear();
    this.ensureActiveInFiltered();
  }

  private matchesRarity(e: TimelineEvent): boolean {
    if (this.raritySelected.size === 0) return true;
    return this.raritySelected.has(this.getEventRarity(e));
  }

  // (removed) legacy photo aspect helpers

  // Order toggle
  private compareByDate(a: TimelineEvent, b: TimelineEvent): number {
    const ta = this.getDate(a).getTime();
    const tb = this.getDate(b).getTime();
    return this.descending ? (tb - ta -0.001) : (ta - tb+0.001);
  }

  private get orderedEvents(): TimelineEvent[] {
    return [...this.events].sort((a, b) => this.compareByDate(a, b));
  }

  toggleOrder(): void {
    this.descending = !this.descending;
    this.ensureActiveInFiltered();
  }

  get filteredEvents(): TimelineEvent[] {
    const base = this.orderedEvents;
    const byTags = this.selectedTags.size === 0
      ? base
      : base.filter((e) => e.tags?.some((t) => this.selectedTags.has(t)));
    return byTags.filter((e) => this.matchesRarity(e));
  }

  // Ensure selection: if no active or active filtered out, select the first visible event
  private ensureActiveInFiltered(): void {
    const list = this.filteredEvents;
    this.active = list.length ? list[0] : null;
  }

  private colorToHex(c: string): string {
    return this.colorMap[c] ?? c;
  }

  // Deterministically assign a color to a given tag
  getTagColor(tag: string): string {
    const palette = Object.values(this.colorMap);
    let hash = 0;
    for (let i = 0; i < tag.length; i++) {
      hash = (hash * 135 + tag.charCodeAt(i)) >>> 0;
    }
    return palette[hash % palette.length];
  }

  getDotBackground(e: TimelineEvent): string {
    const tags = e.tags ?? [];
    const visibleTags = this.selectedTags.size
      ? tags.filter((t) => this.selectedTags.has(t))
      : tags;
    const tagColors = visibleTags.length
      ? visibleTags.map((t) => this.getTagColor(t))
      : [this.colorMap['indigo']];
    if (tagColors.length === 1) return tagColors[0];
    const step = 360 / tagColors.length;
    const stops: string[] = [];
    tagColors.forEach((col, i) => {
      const a = (i * step).toFixed(2);
      const b = ((i + 1) * step).toFixed(2);
      stops.push(`${col} ${a}deg ${b}deg`);
    });
    return `conic-gradient(${stops.join(', ')})`;
  }

  // Date helpers
  private parseDate(value?: string | null): Date | null {
    if (!value) return null;
    const d = new Date(value);
    return isNaN(d.getTime()) ? null : d;
  }

  private getDate(e: TimelineEvent): Date {
    return this.parseDate(e.date) ?? new Date();
  }

  // Spacing: default vs temporal (with long-gap discontinuity)
  getItemMargin(index: number): number {
    const defaultSpace = 48;
    if (index === 0) return 0;
    if (!this.useTemporalSpacing) return defaultSpace;

    const curr = this.filteredEvents[index];
    const prev = this.filteredEvents[index - 1];
    if (!curr || !prev) return defaultSpace;
    const dCurr = this.getDate(curr).getTime();
    const dPrev = this.getDate(prev).getTime();
    const diffDays = Math.max(0, Math.round(Math.abs(dCurr - dPrev) / (1000 * 60 * 60 * 24)));
    const base = this.nodeHeightPx + diffDays * this.temporalMultiplier;
    if(base>this.maxTemporalGapPx)return this.maxTemporalGapPx/2;
    return Math.min(base,this.maxTemporalGapPx);
  }

  isNewYear(index: number): boolean {
    if(this.descending){
      if (index === this.filteredEvents.length-1) return true;
      const curr = this.filteredEvents[index];
      const prev = this.filteredEvents[index + 1];
      return this.getDate(curr).getFullYear() !== this.getDate(prev).getFullYear();
    }
    if (index === 0) return true;
    const curr = this.filteredEvents[index];
    const prev = this.filteredEvents[index - 1];
    return this.getDate(curr).getFullYear() !== this.getDate(prev).getFullYear();
  }

  // Year markers removed
  get yearMarkers(): { year: number; offset: number }[] {
    return [];
  }

  // Whether the gap from previous to current is exceeding the cap (so we show a break marker)
  hasDiscontinuity(index: number): boolean {
    if (!this.useTemporalSpacing || index === 0) return false;
    const curr = this.filteredEvents[index];
    const prev = this.filteredEvents[index - 1];
    if (!curr || !prev) return false;
    const dCurr = this.getDate(curr).getTime();
    const dPrev = this.getDate(prev).getTime();
    const diffDays = Math.max(0, Math.round(Math.abs(dCurr - dPrev) / (1000 * 60 * 60 * 24)));
    const base = this.nodeHeightPx + diffDays * this.temporalMultiplier;
    return base > this.maxTemporalGapPx;
  }
}
