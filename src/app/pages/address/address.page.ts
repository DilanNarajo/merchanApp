import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsService } from '../../core/reports.service';


@Component({ 
  selector: 'app-address', 
  templateUrl: './address.page.html',
  standalone: false
})
export class AddressPage {
address = '';
photo?: string;
constructor(private reportsSrv: ReportsService, private router: Router) {}


async takePhoto(){
this.photo = await this.reportsSrv.capturePhoto();
}


async save(){
const coords = await this.reportsSrv.getCurrentCoords().catch(() => null);
await this.reportsSrv.create({ address: this.address, photoDataUrl: this.photo, coords });
this.router.navigateByUrl('/reports');
}
}