import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {CarApiService} from './car-api';
import {CarService} from './app.service';

import { AppComponent } from './app.component';
import { ViewCarComponent } from './view-car.component';
import { AddCarComponent } from './add-car.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'cars', pathMatch: 'full'},
  {path: 'cars', component: ViewCarComponent},
  {path: 'addcar', component: AddCarComponent}
];


@NgModule({
  declarations: [
    AppComponent,ViewCarComponent, AddCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    InMemoryWebApiModule.forRoot(CarApiService), HttpModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
