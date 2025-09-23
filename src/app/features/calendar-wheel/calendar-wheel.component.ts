import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TIMELINE } from '../timeline/timeline.data';
import { TimelineEvent } from '../timeline/timeline.model';

interface YearEvent {
  year: number;
  events: TimelineEvent[];
  majorEvent?: TimelineEvent;
}

@Component({
  selector: 'app-calendar-wheel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-wheel.component.html',
  styleUrl: './calendar-wheel.component.scss'
})
export class CalendarWheelComponent implements OnInit, OnDestroy {
  years: number[] = [];
  yearEvents: YearEvent[] = [];
  selectedYear: number | null = null;
  selectedYearData: YearEvent | null = null;
  isSpinning = false;
  isModalOpen = false;
  
  // Wheel animation properties
  currentRotation = 0;
  targetRotation = 0;
  spinDuration = 3000; // 3 seconds
  private animationFrame: number | null = null;

  ngOnInit(): void {
    this.initializeYears();
    this.organizeEventsByYear();
  }

  ngOnDestroy(): void {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  private initializeYears(): void {
    // Only include years that have events in the timeline
    const yearsWithEvents = new Set<number>();
    TIMELINE.forEach(event => {
      const year = new Date(event.date).getFullYear();
      yearsWithEvents.add(year);
    });
    
    this.years = Array.from(yearsWithEvents).sort((a, b) => a - b);
  }

  private organizeEventsByYear(): void {
    this.yearEvents = this.years.map(year => {
      const yearEvents = TIMELINE.filter(event => 
        new Date(event.date).getFullYear() === year
      );
      
      // Find the most significant event (golden or diamond, or first event)
      const majorEvent = yearEvents.find(event => event.golden || event.diamond) || yearEvents[0];
      
      return {
        year,
        events: yearEvents,
        majorEvent
      };
    });
  }

  spinWheel(): void {
    if (this.isSpinning) return;
    
    this.isSpinning = true;
    
    // Generate random rotation (multiple full rotations + random angle)
    const baseRotations = 5 + Math.random() * 3; // 5-8 full rotations
    const randomAngle = Math.random() * 360;
    this.targetRotation = this.currentRotation + (baseRotations * 360) + randomAngle;
    
    this.animateSpin();
  }

  private animateSpin(): void {
    const startTime = performance.now();
    const startRotation = this.currentRotation;
    const rotationDiff = this.targetRotation - startRotation;
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.spinDuration, 1);
      
      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      this.currentRotation = startRotation + (rotationDiff * easeOut);
      
      if (progress < 1) {
        this.animationFrame = requestAnimationFrame(animate);
      } else {
        this.isSpinning = false;
        this.determineSelectedYear();
      }
    };
    
    this.animationFrame = requestAnimationFrame(animate);
  }

  private determineSelectedYear(): void {
    // Calculate which year the wheel landed on
    const normalizedRotation = ((this.currentRotation % 360) + 360) % 360;
    const yearIndex = Math.floor((normalizedRotation / 360) * this.years.length);
    const selectedYear = this.years[yearIndex];
    
    this.selectYear(selectedYear);
  }

  selectYear(year: number): void {
    this.selectedYear = year;
    this.selectedYearData = this.yearEvents.find(ye => ye.year === year) || null;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedYear = null;
    this.selectedYearData = null;
  }

  getYearPosition(year: number): number {
    const index = this.years.indexOf(year);
    return (index / this.years.length) * 360;
  }

  getWheelTransform(): string {
    return `rotate(${this.currentRotation}deg)`;
  }

  getYearTransform(year: number): string {
    const position = this.getYearPosition(year);
    return `rotate(${-position}deg)`;
  }

  getYearStyle(year: number): any {
    const position = this.getYearPosition(year);
    const yearData = this.yearEvents.find(ye => ye.year === year);
    const hasEvents = yearData && yearData.events.length > 0;
    
    return {
      transform: `rotate(${-position}deg)`,
      color: hasEvents ? '#ffffff' : '#666666',
      fontWeight: hasEvents ? '600' : '400'
    };
  }

  getCurrentYear(): number {
    const normalizedRotation = ((this.currentRotation % 360) + 360) % 360;
    const yearIndex = Math.floor((normalizedRotation / 360) * this.years.length);
    return this.years[yearIndex];
  }
}
