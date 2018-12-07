import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import {ContactRoutingModule} from "./contact.routing.module";
import {PortofolioRoutingModule} from "../portofolio/portofolio.routing.module";
import {MaterialModule} from "../../material/material.module";

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    MaterialModule,
  ],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule { }
