import { VatModule } from './vat/vat.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
