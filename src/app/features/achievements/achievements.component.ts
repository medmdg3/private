import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Achievement {
  id: string;
  title: string;
  value: number;
  unit: string;
  description: string;
  icon: string;
  color: string;
  category: 'competition' | 'leadership' | 'education' | 'international';
}

interface AchievementCategory {
  name: string;
  icon: string;
  achievements: Achievement[];
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  categories: AchievementCategory[] = [
    {
      name: 'Competitive Programming',
      icon: '🏆',
      achievements: [
        {
          id: 'national-titles',
          title: 'National Titles',
          value: 10,
          unit: 'titles',
          description: 'First place in major Moroccan programming contests',
          icon: '🥇',
          color: '#ffd700',
          category: 'competition'
        },
        {
          id: 'codeforces-master',
          title: 'Codeforces Master',
          value: 1,
          unit: 'rank',
          description: 'Third Moroccan to reach Master rank globally',
          icon: '⚡',
          color: '#8b5cf6',
          category: 'competition'
        },
        {
          id: 'ioi-participations',
          title: 'IOI Participations',
          value: 2,
          unit: 'times',
          description: 'Represented Morocco at International Olympiad in Informatics',
          icon: '🌍',
          color: '#3b82f6',
          category: 'international'
        },
        {
          id: 'contest-wins',
          title: 'Contest Victories',
          value: 15,
          unit: 'wins',
          description: 'Total programming contest victories',
          icon: '🎯',
          color: '#10b981',
          category: 'competition'
        }
      ]
    },
    {
      name: 'Leadership & Impact',
      icon: '👑',
      achievements: [
        {
          id: 'moi-head',
          title: 'MOI Scientific Committee Head',
          value: 1,
          unit: 'position',
          description: 'Leading Morocco\'s premier programming olympiad',
          icon: '🎓',
          color: '#f59e0b',
          category: 'leadership'
        },
        {
          id: 'itacademi-president',
          title: 'IT AcadEMI President',
          value: 1,
          unit: 'role',
          description: 'Leading EMI\'s IT club and community',
          icon: '🏛️',
          color: '#ef4444',
          category: 'leadership'
        },
        {
          id: 'students-mentored',
          title: 'Students Mentored',
          value: 200,
          unit: '+',
          description: 'Students guided through camps and competitions',
          icon: '👥',
          color: '#06b6d4',
          category: 'leadership'
        },
        {
          id: 'camps-organized',
          title: 'Training Camps',
          value: 8,
          unit: 'camps',
          description: 'MOI training camps organized and led',
          icon: '🏕️',
          color: '#84cc16',
          category: 'leadership'
        }
      ]
    },
    {
      name: 'Mathematics & Academics',
      icon: '📚',
      achievements: [
        {
          id: 'imc-silver',
          title: 'IMC Silver Medal',
          value: 1,
          unit: 'medal',
          description: 'International Mathematics Competition, Sofia 2025',
          icon: '🥈',
          color: '#c0c0c0',
          category: 'international'
        },
        {
          id: 'mmc-gold',
          title: 'MMC Gold Medal',
          value: 1,
          unit: 'medal',
          description: 'Math & Maroc Competition 2025',
          icon: '🥇',
          color: '#ffd700',
          category: 'competition'
        },
        {
          id: 'emi-student',
          title: 'EMI Student',
          value: 1,
          unit: 'program',
          description: 'Computer Engineering at Morocco\'s top school',
          icon: '🎓',
          color: '#8b5cf6',
          category: 'education'
        },
        {
          id: 'cpge-graduate',
          title: 'CPGE MP* Graduate',
          value: 1,
          unit: 'track',
          description: 'Advanced Mathematics-Physics preparatory program',
          icon: '⚗️',
          color: '#3b82f6',
          category: 'education'
        }
      ]
    }
  ];

  selectedCategory: string = 'all';
  animatedValues: { [key: string]: number } = {};

  ngOnInit() {
    this.animateNumbers();
  }

  animateNumbers() {
    this.categories.forEach(category => {
      category.achievements.forEach(achievement => {
        this.animateValue(achievement.id, 0, achievement.value, 2000);
      });
    });
  }

  animateValue(key: string, start: number, end: number, duration: number) {
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      this.animatedValues[key] = Math.floor(start + (end - start) * easeOutCubic);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.animatedValues[key] = end;
      }
    };
    
    requestAnimationFrame(animate);
  }

  getFilteredCategories(): AchievementCategory[] {
    if (this.selectedCategory === 'all') {
      return this.categories;
    }
    return this.categories.filter(cat => 
      cat.achievements.some(ach => ach.category === this.selectedCategory)
    );
  }

  getCategoryStats(category: AchievementCategory) {
    return {
      total: category.achievements.length,
      golden: category.achievements.filter(a => a.color === '#ffd700').length,
      international: category.achievements.filter(a => a.category === 'international').length
    };
  }
}
