export interface TimelinePhoto {
  src: string;
  /** If true, keep the image's intrinsic aspect ratio in layout */
  keepRatio?: boolean;
  /** Initial zoom level: 0 (default), 1 (big), 2 (bigger) */
  initialSize?: 0 | 1 | 2;
}

export interface TimelineVideo {
  src: string;
  /** If true, keep the video's intrinsic aspect ratio in layout */
  keepRatio?: boolean;
  /** Initial zoom level: 0 (default), 1 (big), 2 (bigger) */
  initialSize?: 0 | 1 | 2;
}

/** Unified media item allowing ordered mix of photos and videos */
export interface TimelineMedia {
  src: string;
  /** If true, render as a <video>. Defaults to false (image). */
  isVideo?: boolean;
  keepRatio?: boolean;
  initialSize?: 0 | 1 | 2;
}

export interface TimelineEvent {
  /** ISO date (e.g., '2023-01-01') */
  date: string;
  title: string; // e.g., 'Senior Developer'
  subtitle?: string; // e.g., 'Company XYZ'
  description?: string;
  /** Optional concise summary shown in compact views */
  shortDescription?: string;
  /** Tags associated with the event */
  tags?: (import('./tags').Tag | string)[];
  /** Unified, ordered media list (preferred). */
  media?: Array<string | TimelineMedia>;
  /** Back-compat: old fields are still supported and merged if `media` is absent. */
  photos?: Array<string | TimelinePhoto>;
  videos?: Array<string | TimelineVideo>;
  /** If true, render the dot with a golden glow */
  golden?: boolean;
  /** If true, render the dot as a diamond with an icy glow */
  diamond?: boolean;
  /** Allow forward-compatible optional fields without breaking type checks */
  [extraField: string]: unknown;
}
