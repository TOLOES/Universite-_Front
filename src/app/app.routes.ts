import { Routes } from '@angular/router';
import { HomePageContainerComponent } from "./module/HomePage/container/home-page-container.component";

export const appRoutes: Routes = [
  { path: 'home', component: HomePageContainerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
