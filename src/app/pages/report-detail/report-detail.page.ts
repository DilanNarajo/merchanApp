import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportsService } from '../../core/reports.service';
import { Report } from '../../core/reports.model';


@Component({ 
  selector: 'app-report-detail', 
  templateUrl: './report-detail.page.html',
  standalone: false
})
export class ReportDetailPage implements OnInit {
report?: Report;
constructor(private route: ActivatedRoute, private router: Router, private reportsSrv: ReportsService){}
async ngOnInit(){
const id = this.route.snapshot.paramMap.get('id')!;
this.report = await this.reportsSrv.find(id);
}
back(){ this.router.navigateByUrl('/reports'); }
}
