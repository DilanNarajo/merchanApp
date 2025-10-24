import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    IonicModule.forRoot({
      mode: 'ios',
      backButtonText: '',
      animated: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
