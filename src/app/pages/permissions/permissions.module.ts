import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionsPage } from './permissions.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [PermissionsPage],
  exports: [PermissionsPage]
})
export class PermissionsPageModule {}
