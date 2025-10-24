import { Component } from '@angular/core';
import { ReportsService } from './core/reports.service';


@Component({ selector: 'app-root', template: '<ion-app><router-outlet></router-outlet></ion-app>' })
export class AppComponent {
constructor(reports: ReportsService){ reports.init(); }
}