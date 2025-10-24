import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoPreviewPage } from './photo-preview.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [PhotoPreviewPage],
  exports: [PhotoPreviewPage]
})
export class PhotoPreviewPageModule {}
