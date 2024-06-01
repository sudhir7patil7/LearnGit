import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { propertyCardComponent } from './property/property-card/property-card.component';
import { propertyListComponent } from './property/property-list/property-list.component';
import { HttpClientModule } from '@angular/common/http'
import { HousingService } from './services/housing.service';
import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    propertyCardComponent,
    propertyListComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
