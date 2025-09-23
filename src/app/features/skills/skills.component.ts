import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number; // 0-100
  category: 'programming' | 'mathematics' | 'leadership' | 'tools';
  description: string;
  icon: string;
  certifications?: string[];
}

interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  categories: SkillCategory[] = [
    {
      name: 'Programming & Algorithms',
      icon: '💻',
      skills: [
        {
          name: 'Competitive Programming',
          level: 95,
          category: 'programming',
          description: 'Advanced algorithms, data structures, and problem-solving',
          icon: '🏆',
          certifications: ['Codeforces Master', '10 National Titles', 'IOI Participant']
        },
        {
          name: 'C++',
          level: 90,
          category: 'programming',
          description: 'Primary language for competitive programming and system development',
          icon: '⚡',
          certifications: ['Advanced C++', 'STL Expert']
        },
        {
          name: 'Python',
          level: 85,
          category: 'programming',
          description: 'Data analysis, automation, and rapid prototyping',
          icon: '🐍',
          certifications: ['Data Science', 'Automation']
        },
        {
          name: 'JavaScript/TypeScript',
          level: 80,
          category: 'programming',
          description: 'Web development and modern frontend frameworks',
          icon: '🌐',
          certifications: ['Angular', 'Node.js']
        },
        {
          name: 'Java',
          level: 75,
          category: 'programming',
          description: 'Object-oriented programming and enterprise applications',
          icon: '☕',
          certifications: ['OOP Principles', 'Spring Framework']
        },
        {
          name: 'Data Structures & Algorithms',
          level: 95,
          category: 'programming',
          description: 'Advanced algorithmic thinking and optimization',
          icon: '🧮',
          certifications: ['Algorithm Design', 'Complexity Analysis']
        }
      ]
    },
    {
      name: 'Mathematics & Problem Solving',
      icon: '📐',
      skills: [
        {
          name: 'Mathematical Olympiads',
          level: 90,
          category: 'mathematics',
          description: 'Advanced mathematics competition and problem-solving',
          icon: '🥈',
          certifications: ['IMC Silver Medal', 'MMC Gold Medal', 'National Selection Winner']
        },
        {
          name: 'Discrete Mathematics',
          level: 85,
          category: 'mathematics',
          description: 'Combinatorics, graph theory, and number theory',
          icon: '🔢',
          certifications: ['Graph Theory', 'Combinatorics']
        },
        {
          name: 'Linear Algebra',
          level: 80,
          category: 'mathematics',
          description: 'Vector spaces, matrices, and linear transformations',
          icon: '📊',
          certifications: ['Matrix Theory', 'Vector Spaces']
        },
        {
          name: 'Probability & Statistics',
          level: 75,
          category: 'mathematics',
          description: 'Statistical analysis and probabilistic reasoning',
          icon: '📈',
          certifications: ['Statistical Analysis', 'Probability Theory']
        }
      ]
    },
    {
      name: 'Leadership & Management',
      icon: '👑',
      skills: [
        {
          name: 'Team Leadership',
          level: 90,
          category: 'leadership',
          description: 'Leading teams in competitions and organizational roles',
          icon: '🎯',
          certifications: ['MOI Scientific Committee Head', 'IT AcadEMI President']
        },
        {
          name: 'Mentoring & Training',
          level: 85,
          category: 'leadership',
          description: 'Training and mentoring students in programming',
          icon: '👥',
          certifications: ['200+ Students Mentored', '8 Training Camps Led']
        },
        {
          name: 'Event Organization',
          level: 80,
          category: 'leadership',
          description: 'Organizing competitions and educational events',
          icon: '🎪',
          certifications: ['CodEMI Organizer', 'MOI Camps Manager']
        },
        {
          name: 'Strategic Planning',
          level: 75,
          category: 'leadership',
          description: 'Long-term planning and organizational strategy',
          icon: '🗺️',
          certifications: ['Committee Leadership', 'Program Development']
        }
      ]
    },
    {
      name: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        {
          name: 'Git & Version Control',
          level: 85,
          category: 'tools',
          description: 'Collaborative development and project management',
          icon: '📝',
          certifications: ['Git Workflow', 'Collaborative Development']
        },
        {
          name: 'Linux/Unix',
          level: 80,
          category: 'tools',
          description: 'System administration and command-line proficiency',
          icon: '🐧',
          certifications: ['System Administration', 'Shell Scripting']
        },
        {
          name: 'Database Management',
          level: 70,
          category: 'tools',
          description: 'SQL and database design principles',
          icon: '🗄️',
          certifications: ['SQL', 'Database Design']
        },
        {
          name: 'Development Tools',
          level: 75,
          category: 'tools',
          description: 'IDEs, debuggers, and development environments',
          icon: '🔧',
          certifications: ['VS Code', 'IntelliJ IDEA', 'GDB']
        }
      ]
    }
  ];

  selectedCategory: string = 'all';
  animatedLevels: { [key: string]: number } = {};

  ngOnInit() {
    this.animateSkillLevels();
  }

  animateSkillLevels() {
    this.categories.forEach(category => {
      category.skills.forEach(skill => {
        this.animateValue(skill.name, 0, skill.level, 2000);
      });
    });
  }

  animateValue(key: string, start: number, end: number, duration: number) {
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      this.animatedLevels[key] = Math.floor(start + (end - start) * easeOutCubic);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.animatedLevels[key] = end;
      }
    };
    
    requestAnimationFrame(animate);
  }

  getFilteredCategories(): SkillCategory[] {
    if (this.selectedCategory === 'all') {
      return this.categories;
    }
    return this.categories.filter(cat => 
      cat.skills.some(skill => skill.category === this.selectedCategory)
    );
  }

  getLevelColor(level: number): string {
    if (level >= 90) return '#10b981'; // green
    if (level >= 75) return '#3b82f6'; // blue
    if (level >= 60) return '#f59e0b'; // yellow
    return '#ef4444'; // red
  }

  getLevelLabel(level: number): string {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  }

  getExpertSkillsCount(category: SkillCategory): number {
    return category.skills.filter(s => s.level >= 90).length;
  }
}
