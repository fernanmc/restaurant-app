import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';


import { AppComponent }  from './app.component';
import {routing, appRoutingProviders} from './app.routing';


import {RestauranteListComponent} from "./component/restaurantes-list.component";
import {RestauranteDetailComponent} from "./component/restaurante-detail.component";
import {RestauranteAddComponent} from "./component/restaurante-add.component";
import {RestauranteEditComponent} from "./component/restaurante-edit.component";


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing ],
  declarations: [ 
                  AppComponent,
                  RestauranteListComponent,
                  RestauranteDetailComponent,
                  RestauranteEditComponent,
                  RestauranteAddComponent 
                ],
  providers: [appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }