import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsService } from '../../core/reports.service';

@Component({ 
  selector: 'app-photo-preview', 
  templateUrl: './photo-preview.page.html',
  standalone: false
})
export class PhotoPreviewPage {
  photo?: string;
  address?: string;
  
  constructor(private reportsSrv: ReportsService, private router: Router) {}

  async ionViewWillEnter(){
    // En una implementación real podrías usar un estado compartido/servicio para pasar datos temporales
  }

  async save(){
    await this.reportsSrv.create({ photoDataUrl: this.photo, address: this.address });
    this.router.navigateByUrl('/reports');
  }

  retakePhoto() {
    this.router.navigateByUrl('/camera');
  }
}
