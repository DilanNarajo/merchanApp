import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReportsPage } from './reports.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  declarations: [ReportsPage],
  exports: [ReportsPage]
})
export class ReportsPageModule {}
