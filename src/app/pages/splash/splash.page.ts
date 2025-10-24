import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashPage } from './splash.page';

@NgModule({
  imports: [CommonModule],
  declarations: [SplashPage],
  exports: [SplashPage]
})
export class SplashPageModule {}