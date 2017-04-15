import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfolioComponent } from './profolio/profolio.component';
import { AppComponent } from './app.component';

// Route Configuration
export const routes: Routes = [
  { path: 'code', component: ProfolioComponent },
  { path: 'research', component: ProfolioComponent },
  { path: '', component: ProfolioComponent },
  { path: '**', component: ProfolioComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
