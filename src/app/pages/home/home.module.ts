import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from "./home.routing.module";
import {NavigationModule} from "../../components/navigation/navigation.module";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavigationModule,
  ],
  declarations: [HomeComponent],
  exports:[HomeComponent]
})
export class HomeModule { }
