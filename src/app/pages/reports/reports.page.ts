import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../core/reports.service';
import { Report } from '../../core/reports.model';


@Component({ 
  selector: 'app-reports', 
  templateUrl: './reports.page.html',
  standalone: false
})
export class ReportsPage implements OnInit {
reports: Report[] = [];
constructor(private reportsSrv: ReportsService) {}
async ngOnInit(){ this.reports = await this.reportsSrv.list(); }
async ionViewWillEnter(){ this.reports = await this.reportsSrv.list(); }
}
