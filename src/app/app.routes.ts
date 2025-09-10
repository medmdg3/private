import { Routes } from '@angular/router';
import { TimelineComponent } from './features/timeline/timeline.component';
import { HomeComponent } from './features/home/home.component';
import { ProjectsComponent } from './features/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '' },
];
