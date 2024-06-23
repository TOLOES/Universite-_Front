import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../components/home-page.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-home-page-container',
  standalone: true,
  imports: [CommonModule, HomePageComponent, HeaderComponent],
  templateUrl: './home-page-container.component.html',
})
export class HomePageContainerComponent {}
