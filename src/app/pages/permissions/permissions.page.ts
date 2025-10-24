import { Component } from '@angular/core';
import { ReportsService } from 'src/app/core/reports.service';


@Component({ selector: 'app-permissions', templateUrl: './permissions.page.html' })
export class PermissionsPage {
constructor(private reportsSrv: ReportsService) {}
async ask(){
const granted = await this.reportsSrv.requestLocationPermission();
if (!granted) alert('Se requieren permisos de ubicación.');
}
}
