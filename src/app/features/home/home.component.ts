import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CalendarWheelComponent } from '../calendar-wheel/calendar-wheel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CalendarWheelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}

