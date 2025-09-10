import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from './projects.data';
import { Project } from './projects.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;
  active: Project | null = null;

  toggle(p: Project): void {
    this.active = this.active?.id === p.id ? null : p;
  }
}

