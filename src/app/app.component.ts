import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonApp } from '@ionic/angular/standalone';
import { ReportsService } from './core/reports.service';

@Component({ 
  selector: 'app-root', 
  template: '<ion-app><router-outlet></router-outlet></ion-app>',
  imports: [IonApp, RouterOutlet],
  standalone: true
})
export class AppComponent {
  constructor(reports: ReportsService){ 
    reports.init(); 
  }
}