import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportDetailPage } from './report-detail.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [ReportDetailPage],
  exports: [ReportDetailPage]
})
export class ReportDetailPageModule {}
