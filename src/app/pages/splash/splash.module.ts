import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashPage } from './splash.page';
import { IonicModule } from '@ionic/angular';  // Importa IonicModule para usar sus componentes

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [SplashPage]
})
export class SplashPageModule {}
