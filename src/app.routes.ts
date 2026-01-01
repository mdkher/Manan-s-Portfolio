import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ProjectsComponent } from './pages/projects.component';
import { CaseStudyComponent } from './pages/case-study.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work', component: ProjectsComponent },
  { path: 'work/:id', component: CaseStudyComponent },
  { path: '**', redirectTo: '' }
];
