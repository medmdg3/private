import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  rating: number;
  avatar?: string;
  relationship: 'mentor' | 'colleague' | 'student' | 'official';
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials">
      <div class="testimonials-header">
        <h2>💬 Testimonials & Recommendations</h2>
        <p>What mentors, colleagues, and students say about working with Mohammed</p>
      </div>

      <div class="testimonials-container">
        <div class="testimonial-card active">
          <div class="testimonial-content">
            <div class="quote-icon">"</div>
            <blockquote class="testimonial-text">
              {{ testimonials[currentTestimonial].content }}
            </blockquote>
            <div class="testimonial-author">
              <div class="author-info">
                <div class="author-avatar">
                  <span class="avatar-text">{{ testimonials[currentTestimonial].name.charAt(0) }}</span>
                </div>
                <div class="author-details">
                  <h4 class="author-name">{{ testimonials[currentTestimonial].name }}</h4>
                  <p class="author-role">{{ testimonials[currentTestimonial].role }}</p>
                  <p class="author-organization">{{ testimonials[currentTestimonial].organization }}</p>
                </div>
              </div>
              <div class="testimonial-meta">
                <div class="relationship-badge">
                  <span class="relationship-icon">{{ getRelationshipIcon(testimonials[currentTestimonial].relationship) }}</span>
                  <span class="relationship-text">{{ testimonials[currentTestimonial].relationship | titlecase }}</span>
                </div>
                <div class="rating">
                  <span *ngFor="let star of [1,2,3,4,5]" 
                        class="star filled">★</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-controls">
          <button class="control-btn prev-btn" (click)="previousTestimonial()">‹</button>
          <button class="control-btn next-btn" (click)="nextTestimonial()">›</button>
        </div>

        <div class="carousel-dots">
          <button *ngFor="let testimonial of testimonials; let i = index"
                  class="dot"
                  [class.active]="i === currentTestimonial"
                  (click)="goToTestimonial(i)"></button>
        </div>
      </div>

      <div class="testimonial-stats">
        <div class="stat-card">
          <div class="stat-icon">⭐</div>
          <div class="stat-content">
            <h4>5.0</h4>
            <p>Average Rating</p>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">👥</div>
          <div class="stat-content">
            <h4>{{ testimonials.length }}</h4>
            <p>Recommendations</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials { padding: 2rem 0; max-width: 1200px; margin: 0 auto; }
    .testimonials-header { text-align: center; margin-bottom: 3rem; }
    .testimonials-header h2 { font-size: 2.5rem; margin-bottom: 1rem; background: linear-gradient(135deg, #f8fafc 0%, #60a5fa 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .testimonials-header p { font-size: 1.125rem; color: var(--muted); max-width: 600px; margin: 0 auto; }
    .testimonials-container { position: relative; margin-bottom: 3rem; }
    .testimonial-card { background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 2rem; backdrop-filter: blur(20px); }
    .testimonial-content { display: flex; flex-direction: column; gap: 1.5rem; }
    .quote-icon { font-size: 4rem; color: var(--accent); opacity: 0.3; }
    .testimonial-text { font-size: 1.125rem; line-height: 1.6; color: var(--text); font-style: italic; margin: 0; }
    .testimonial-author { display: flex; justify-content: space-between; align-items: center; gap: 2rem; }
    .author-info { display: flex; align-items: center; gap: 1rem; }
    .author-avatar { width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), var(--accent-2)); display: flex; align-items: center; justify-content: center; }
    .avatar-text { font-size: 1.5rem; font-weight: 700; color: white; }
    .author-name { font-size: 1.125rem; font-weight: 600; color: #f8fafc; margin: 0 0 0.25rem 0; }
    .author-role { font-size: 0.875rem; color: var(--accent); font-weight: 500; margin: 0 0 0.25rem 0; }
    .author-organization { font-size: 0.875rem; color: var(--muted); margin: 0; }
    .testimonial-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 1rem; }
    .relationship-badge { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: rgba(96, 165, 250, 0.1); border: 1px solid rgba(96, 165, 250, 0.3); border-radius: 20px; font-size: 0.875rem; font-weight: 500; color: var(--accent); }
    .rating { display: flex; gap: 0.25rem; }
    .star { font-size: 1.25rem; color: #fbbf24; }
    .carousel-controls { position: absolute; top: 50%; left: 0; right: 0; transform: translateY(-50%); display: flex; justify-content: space-between; pointer-events: none; z-index: 3; }
    .control-btn { width: 50px; height: 50px; border-radius: 50%; background: rgba(15, 23, 42, 0.9); border: 1px solid rgba(255, 255, 255, 0.2); color: var(--text); font-size: 1.5rem; cursor: pointer; transition: all 0.3s ease; pointer-events: all; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(10px); }
    .control-btn:hover { background: var(--accent); border-color: var(--accent); color: white; transform: scale(1.1); }
    .prev-btn { margin-left: -25px; }
    .next-btn { margin-right: -25px; }
    .carousel-dots { display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 2rem; }
    .dot { width: 12px; height: 12px; border-radius: 50%; background: rgba(255, 255, 255, 0.3); border: none; cursor: pointer; transition: all 0.3s ease; }
    .dot:hover { background: rgba(255, 255, 255, 0.5); transform: scale(1.2); }
    .dot.active { background: var(--accent); transform: scale(1.3); }
    .testimonial-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; }
    .stat-card { display: flex; align-items: center; gap: 1rem; padding: 1.5rem; background: rgba(15, 23, 42, 0.6); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.08); backdrop-filter: blur(10px); transition: all 0.3s ease; }
    .stat-card:hover { transform: translateY(-2px); border-color: var(--accent); }
    .stat-icon { font-size: 2rem; flex-shrink: 0; }
    .stat-content h4 { font-size: 1.5rem; font-weight: 700; color: var(--accent); margin: 0 0 0.25rem 0; }
    .stat-content p { font-size: 0.875rem; color: var(--muted); margin: 0; }
  `]
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      id: 'mentor-1',
      name: 'Moncef Mhasni',
      role: 'Programming Coach',
      organization: 'MOI Scientific Committee',
      content: 'Mohammed has been an exceptional student and now a remarkable leader. His dedication to competitive programming and his ability to mentor others is truly inspiring. He represents the best of what our educational system can produce.',
      rating: 5,
      relationship: 'mentor'
    },
    {
      id: 'colleague-1',
      name: 'Ayman Riad Solh',
      role: 'Fellow Competitor & Teammate',
      organization: 'EMI Rabat',
      content: 'Competing alongside Mohammed has been one of the greatest experiences of my life. His strategic thinking, problem-solving approach, and leadership qualities make him an invaluable teammate. He pushes everyone around him to be better.',
      rating: 5,
      relationship: 'colleague'
    },
    {
      id: 'student-1',
      name: 'Yassir Salama',
      role: 'MOI Participant',
      organization: 'High School Student',
      content: 'Mr. Benomar\'s mentorship changed my perspective on competitive programming. His training methods and encouragement helped me qualify for IOI. He has a unique ability to explain complex concepts in simple terms.',
      rating: 5,
      relationship: 'student'
    },
    {
      id: 'official-1',
      name: 'Ghita Mezzour',
      role: 'Minister',
      organization: 'Ministry of Digital Transition',
      content: 'Mohammed represents the future of Morocco\'s digital transformation. His achievements in international competitions and his commitment to mentoring the next generation exemplify the excellence we need in our country.',
      rating: 5,
      relationship: 'official'
    },
    {
      id: 'colleague-2',
      name: 'Nabil Boudraa',
      role: 'Fellow Master',
      organization: 'Codeforces',
      content: 'Mohammed\'s journey from a curious student to a Master on Codeforces has been incredible to witness. His persistence, analytical thinking, and collaborative spirit make him a role model for aspiring programmers.',
      rating: 5,
      relationship: 'colleague'
    },
    {
      id: 'student-2',
      name: 'Mahdi Benkhadra',
      role: 'IOI Team Member',
      organization: 'High School Student',
      content: 'The training camps led by Mr. Benomar were transformative. His approach to problem-solving and his encouragement helped me achieve my dream of representing Morocco at IOI. He\'s not just a teacher, he\'s a true mentor.',
      rating: 5,
      relationship: 'student'
    }
  ];

  currentTestimonial = 0;
  isAutoPlaying = true;
  autoPlayInterval: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      if (this.isAutoPlaying) {
        this.nextTestimonial();
      }
    }, 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextTestimonial() {
    this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
  }

  previousTestimonial() {
    this.currentTestimonial = this.currentTestimonial === 0 
      ? this.testimonials.length - 1 
      : this.currentTestimonial - 1;
  }

  goToTestimonial(index: number) {
    this.currentTestimonial = index;
  }

  toggleAutoPlay() {
    this.isAutoPlaying = !this.isAutoPlaying;
    if (this.isAutoPlaying) {
      this.startAutoPlay();
    } else {
      this.stopAutoPlay();
    }
  }

  getRelationshipIcon(relationship: string): string {
    switch (relationship) {
      case 'mentor': return '🎓';
      case 'colleague': return '🤝';
      case 'student': return '👨‍🎓';
      case 'official': return '🏛️';
      default: return '💬';
    }
  }

  getRelationshipColor(relationship: string): string {
    switch (relationship) {
      case 'mentor': return '#8b5cf6';
      case 'colleague': return '#3b82f6';
      case 'student': return '#10b981';
      case 'official': return '#f59e0b';
      default: return '#6b7280';
    }
  }
}
