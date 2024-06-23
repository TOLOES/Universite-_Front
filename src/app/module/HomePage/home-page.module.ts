import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageContainerComponent } from './container/home-page-container.component';
import { HomePageComponent } from './components/home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HomePageContainerComponent,
    HomePageComponent
  ],
  exports: [
    HomePageContainerComponent,
    HomePageComponent
  ]
})
export class HomePageModule {}
