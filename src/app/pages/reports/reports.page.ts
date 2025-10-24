import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/core/reports.service';
import { Report } from 'src/app/core/reports.model';


@Component({ selector: 'app-reports', templateUrl: './reports.page.html' })
export class ReportsPage implements OnInit {
reports: Report[] = [];
constructor(private reportsSrv: ReportsService) {}
async ngOnInit(){ this.reports = await this.reportsSrv.list(); }
async ionViewWillEnter(){ this.reports = await this.reportsSrv.list(); }
}
