import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      class="theme-toggle"
      (click)="toggleTheme()"
      [class.dark]="isDarkMode"
      [class.light]="!isDarkMode"
      [attr.aria-label]="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
      title="Toggle theme"
    >
      <div class="toggle-icon">
        <span class="moon-icon" *ngIf="isDarkMode">🌙</span>
        <span class="sun-icon" *ngIf="!isDarkMode">☀️</span>
      </div>
      <div class="toggle-text">
        {{ isDarkMode ? 'Dark' : 'Light' }}
      </div>
    </button>
  `,
  styles: [`
    .theme-toggle {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 25px;
      color: var(--text);
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }
    
    .theme-toggle:hover {
      background: rgba(15, 23, 42, 0.8);
      border-color: var(--accent);
      transform: translateY(-1px);
    }
    
    .theme-toggle.dark {
      background: linear-gradient(135deg, #1e293b, #334155);
      border-color: #475569;
    }
    
    .theme-toggle.dark:hover {
      background: linear-gradient(135deg, #334155, #475569);
    }
    
    .theme-toggle.light {
      background: linear-gradient(135deg, #f8fafc, #e2e8f0);
      border-color: #cbd5e1;
      color: #1e293b;
    }
    
    .theme-toggle.light:hover {
      background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
    }
    
    .toggle-icon {
      font-size: 1rem;
      transition: transform 0.3s ease;
    }
    
    .theme-toggle:hover .toggle-icon {
      transform: rotate(15deg);
    }
    
    .toggle-text {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    @media (max-width: 768px) {
      .theme-toggle {
        padding: 0.4rem 0.8rem;
        font-size: 0.8rem;
      }
      
      .toggle-text {
        display: none;
      }
    }
  `]
})
export class ThemeToggleComponent implements OnInit, OnDestroy {
  isDarkMode = true;
  private themeKey = 'portfolio-theme';

  ngOnInit() {
    // Load saved theme preference
    const savedTheme = localStorage.getItem(this.themeKey);
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      // Default to dark mode
      this.isDarkMode = true;
    }
    
    this.applyTheme();
  }

  ngOnDestroy() {
    // Save theme preference
    localStorage.setItem(this.themeKey, this.isDarkMode ? 'dark' : 'light');
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    localStorage.setItem(this.themeKey, this.isDarkMode ? 'dark' : 'light');
  }

  private applyTheme() {
    const root = document.documentElement;
    
    if (this.isDarkMode) {
      root.classList.remove('light-theme');
      root.classList.add('dark-theme');
    } else {
      root.classList.remove('dark-theme');
      root.classList.add('light-theme');
    }
  }
}
