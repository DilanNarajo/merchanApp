import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-mode',
  templateUrl: './report-mode.page.html',
  styleUrls: ['./report-mode.page.scss'],
  standalone: false
})
export class ReportModePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
