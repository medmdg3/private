import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  placeholder: string;
  required: boolean;
}

interface ContactInfo {
  label: string;
  value: string;
  icon: string;
  link?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact">
      <div class="contact-header">
        <h2>📬 Get In Touch</h2>
        <p>Ready to collaborate, mentor, or just have a conversation? I'd love to hear from you!</p>
      </div>

      <div class="contact-content">
        <div class="contact-info-section">
          <h3>Connect With Me</h3>
          <div class="contact-info-grid">
            <div *ngFor="let info of contactInfo" class="contact-info-card">
              <div class="info-icon">{{ info.icon }}</div>
              <div class="info-content">
                <h4>{{ info.label }}</h4>
                <p>{{ info.value }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-section">
          <h3>Send a Message</h3>
          <form (ngSubmit)="onSubmit()" class="contact-form">
            <div class="form-group">
              <label class="form-label">What can I help you with?</label>
              <div class="contact-type-options">
                <label *ngFor="let option of contactOptions" class="contact-type-option" [class.selected]="formData.contactType === option.id">
                  <input type="radio" name="contactType" [value]="option.id" [(ngModel)]="formData.contactType" (change)="onContactTypeChange()" class="contact-type-input">
                  <div class="option-content">
                    <div class="option-icon">{{ option.icon }}</div>
                    <div class="option-text">
                      <h4>{{ option.title }}</h4>
                      <p>{{ option.description }}</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="name" class="form-label">Name *</label>
                <input type="text" id="name" name="name" [(ngModel)]="formData.name" class="form-input" placeholder="Your full name" required>
              </div>
              <div class="form-group">
                <label for="email" class="form-label">Email *</label>
                <input type="email" id="email" name="email" [(ngModel)]="formData.email" class="form-input" placeholder="your.email@example.com" required>
              </div>
            </div>

            <div class="form-group" *ngIf="getSelectedOption()?.required">
              <label for="subject" class="form-label">Subject *</label>
              <input type="text" id="subject" name="subject" [(ngModel)]="formData.subject" class="form-input" [placeholder]="getSelectedOption()?.placeholder" required>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Message *</label>
              <textarea id="message" name="message" [(ngModel)]="formData.message" class="form-textarea" placeholder="Tell me more about your inquiry..." rows="6" required></textarea>
            </div>

            <div class="form-actions">
              <button type="submit" class="submit-btn" [disabled]="!isFormValid() || isSubmitting">
                <span *ngIf="!isSubmitting">📤 Send Message</span>
                <span *ngIf="isSubmitting">⏳ Sending...</span>
              </button>
            </div>

            <div class="form-status" *ngIf="submitStatus !== 'idle'">
              <div class="status-message" [class.success]="submitStatus === 'success'" [class.error]="submitStatus === 'error'">
                <span class="status-icon">{{ submitStatus === 'success' ? '✅' : '❌' }}</span>
                <span class="status-text">{{ submitStatus === 'success' ? 'Message sent successfully! I\'ll get back to you soon.' : 'Failed to send message. Please try again.' }}</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact { padding: 2rem 0; max-width: 1200px; margin: 0 auto; }
    .contact-header { text-align: center; margin-bottom: 3rem; }
    .contact-header h2 { font-size: 2.5rem; margin-bottom: 1rem; background: linear-gradient(135deg, #f8fafc 0%, #60a5fa 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .contact-header p { font-size: 1.125rem; color: var(--muted); max-width: 600px; margin: 0 auto; }
    .contact-content { display: grid; grid-template-columns: 1fr 2fr; gap: 3rem; margin-bottom: 3rem; }
    .contact-info-section h3 { font-size: 1.5rem; color: #f8fafc; margin-bottom: 1.5rem; }
    .contact-info-grid { display: flex; flex-direction: column; gap: 1rem; }
    .contact-info-card { display: flex; align-items: center; gap: 1rem; padding: 1.5rem; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; backdrop-filter: blur(10px); transition: all 0.3s ease; }
    .contact-info-card:hover { transform: translateY(-2px); border-color: var(--accent); }
    .info-icon { font-size: 1.5rem; flex-shrink: 0; }
    .info-content h4 { font-size: 1rem; font-weight: 600; color: #f8fafc; margin: 0 0 0.25rem 0; }
    .info-content p { font-size: 0.875rem; color: var(--muted); margin: 0; }
    .contact-form-section h3 { font-size: 1.5rem; color: #f8fafc; margin-bottom: 1.5rem; }
    .contact-form { background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 2rem; backdrop-filter: blur(10px); }
    .form-group { margin-bottom: 1.5rem; }
    .form-label { display: block; font-size: 0.875rem; font-weight: 600; color: #f8fafc; margin-bottom: 0.5rem; }
    .contact-type-options { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }
    .contact-type-option { position: relative; cursor: pointer; }
    .contact-type-input { position: absolute; opacity: 0; pointer-events: none; }
    .option-content { display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(30, 41, 59, 0.6); border: 2px solid rgba(255, 255, 255, 0.1); border-radius: 12px; transition: all 0.3s ease; }
    .option-content:hover { border-color: var(--accent); background: rgba(30, 41, 59, 0.8); }
    .contact-type-option.selected .option-content { border-color: var(--accent); background: rgba(96, 165, 250, 0.1); }
    .option-icon { font-size: 1.5rem; flex-shrink: 0; }
    .option-text h4 { font-size: 0.875rem; font-weight: 600; color: #f8fafc; margin: 0 0 0.25rem 0; }
    .option-text p { font-size: 0.75rem; color: var(--muted); margin: 0; line-height: 1.4; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .form-input, .form-textarea { width: 100%; padding: 0.75rem 1rem; background: rgba(30, 41, 59, 0.6); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; color: var(--text); font-size: 0.875rem; transition: all 0.3s ease; }
    .form-input:focus, .form-textarea:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1); }
    .form-input::placeholder, .form-textarea::placeholder { color: var(--muted); }
    .form-textarea { resize: vertical; min-height: 120px; }
    .form-actions { display: flex; justify-content: flex-end; margin-top: 2rem; }
    .submit-btn { display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem 2rem; background: linear-gradient(135deg, var(--accent), var(--accent-2)); border: none; border-radius: 50px; color: white; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.3s ease; }
    .submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(96, 165, 250, 0.3); }
    .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
    .form-status { margin-top: 1rem; }
    .status-message { display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1rem; border-radius: 8px; font-size: 0.875rem; font-weight: 500; }
    .status-message.success { background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); color: #10b981; }
    .status-message.error { background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #ef4444; }
    .status-icon { font-size: 1rem; }
    @media (max-width: 768px) { .contact-content { grid-template-columns: 1fr; gap: 2rem; } .form-row { grid-template-columns: 1fr; } .contact-type-options { grid-template-columns: 1fr; } }
  `]
})
export class ContactComponent implements OnInit {
  contactOptions: ContactOption[] = [
    {
      id: 'collaboration',
      title: 'Collaboration Opportunity',
      description: 'Interested in working together on a project or competition',
      icon: '🤝',
      placeholder: 'Tell me about the collaboration opportunity...',
      required: true
    },
    {
      id: 'mentorship',
      title: 'Mentorship Request',
      description: 'Seeking guidance in competitive programming or mathematics',
      icon: '🎓',
      placeholder: 'Describe what kind of mentorship you\'re looking for...',
      required: true
    },
    {
      id: 'speaking',
      title: 'Speaking Engagement',
      description: 'Invitation to speak at an event or conference',
      icon: '🎤',
      placeholder: 'Tell me about the event and your requirements...',
      required: true
    },
    {
      id: 'general',
      title: 'General Inquiry',
      description: 'Any other questions or messages',
      icon: '💬',
      placeholder: 'How can I help you?',
      required: false
    }
  ];

  contactInfo: ContactInfo[] = [
    {
      label: 'Email',
      value: 'benomar.mohammed@emi.ac.ma',
      icon: '📧',
      link: 'mailto:benomar.mohammed@emi.ac.ma'
    },
    {
      label: 'LinkedIn',
      value: 'Mohammed Benomar',
      icon: '💼',
      link: 'https://linkedin.com/in/mohammed-benomar'
    },
    {
      label: 'Codeforces',
      value: 'medmdg_3',
      icon: '🏆',
      link: 'https://codeforces.com/profile/medmdg_3'
    },
    {
      label: 'GitHub',
      value: 'mohammed-benomar',
      icon: '💻',
      link: 'https://github.com/mohammed-benomar'
    }
  ];

  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
    contactType: 'general'
  };

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  ngOnInit() {
    // Initialize form
  }

  getSelectedOption(): ContactOption | undefined {
    return this.contactOptions.find(option => option.id === this.formData.contactType);
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.isSubmitting = true;
      this.submitStatus = 'idle';
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitStatus = 'success';
        this.resetForm();
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          this.submitStatus = 'idle';
        }, 3000);
      }, 2000);
    }
  }

  isFormValid(): boolean {
    const selectedOption = this.getSelectedOption();
    return !!(
      this.formData.name.trim() &&
      this.formData.email.trim() &&
      this.formData.message.trim() &&
      (!selectedOption?.required || this.formData.subject.trim())
    );
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: '',
      contactType: 'general'
    };
  }

  onContactTypeChange() {
    // Reset subject when contact type changes
    this.formData.subject = '';
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      // Show a brief success message
      console.log('Copied to clipboard:', text);
    });
  }
}
