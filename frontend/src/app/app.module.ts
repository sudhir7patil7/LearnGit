import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { propertyCardComponent } from './property/property-card/property-card.component';
import { propertyListComponent } from './property/property-list/property-list.component';
import { HttpClientModule } from '@angular/common/http'
import { HousingService } from './services/housing.service';
import { Test1Component } from './test1/test1.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { DataTransferComponent } from './data-transfer/data-transfer.component';
import { WebAPICallComponent } from './web-apicall/web-apicall.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes= [
  {path:'',component:propertyListComponent} ,
  {path:'rent-property',component:propertyCardComponent},
  {path:'add-property', component:AddPropertyComponent},
  {path:'DataTransfer',component:DataTransferComponent},
  {path:'WebAPICall',component:WebAPICallComponent},
  {path:'TemplateDrivenForm',component:TemplateDrivenFormComponent},
  {path:'ReactiveForm',component:ReactiveFormComponent},
  {path:'LifeCycleHooks',component:LifeCycleHooksComponent}



]
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  propertyCardComponent,
propertyListComponent,
DataTransferComponent,
LifeCycleHooksComponent,
TemplateDrivenFormComponent,
ReactiveFormComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
