import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportModePage } from './report-mode.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [ReportModePage],
  exports: [ReportModePage]
})
export class ReportModePageModule {}
