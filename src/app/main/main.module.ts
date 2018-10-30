import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {MainRoutingModule} from "./main.routing.module";
import {MaterialModule} from "../material/material.module";
import {HomeModule} from "../pages/home/home.module";

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
  ],
  declarations: [MainComponent],
  exports: [MainComponent],
})
export class MainModule { }
