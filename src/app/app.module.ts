import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {​​​​​​​​ AppRoutingModule }​​​​​​​​ from'./app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {​​​​​​​​ PhonesComponent }​​​​​​​​ from'./phones/phones.component';
import { Services } from './services/services';
import { HelperService } from './shared/helper.service';


@NgModule({
  declarations: [
    AppComponent,
    PhonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Services,HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
