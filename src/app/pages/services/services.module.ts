import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import {ServicesRoutingModule} from "./services.routing.module";
import {MaterialModule} from "../../material/material.module";

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    MaterialModule
  ],
  declarations: [ServicesComponent],
  exports: [ServicesComponent]
})
export class ServicesModule { }
