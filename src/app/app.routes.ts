import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { IntegrationComponent } from './features/integration/integration.component';
import { GenerationComponent } from './features/generation/generation.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'integration', component: IntegrationComponent },
  { path: 'generation', component: GenerationComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
];
