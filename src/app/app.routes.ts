import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfolioComponent } from './profolio/profolio.component';
import { AppComponent } from './app.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: ProfolioComponent},
  { path: 'code', component: ProfolioComponent },
  { path: 'research', component: ProfolioComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
