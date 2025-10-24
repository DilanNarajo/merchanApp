import { Component } from '@angular/core';
import { ReportsService } from 'src/app/core/reports.service';


@Component({ selector: 'app-camera', templateUrl: './camera.page.html' })
export class CameraPage {
photo?: string;
constructor(private reportsSrv: ReportsService) {}


async shoot(){
this.photo = await this.reportsSrv.capturePhoto();
}
}
