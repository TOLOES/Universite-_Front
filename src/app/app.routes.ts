import { Routes } from '@angular/router';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

export const appRoutes: Routes = [
  { path: 'vehicles', component: VehicleListComponent },
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
];
