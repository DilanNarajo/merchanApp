import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraPage } from './camera.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [CameraPage],
  exports: [CameraPage]
})
export class CameraPageModule {}
