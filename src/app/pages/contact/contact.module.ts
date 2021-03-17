import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import {ContactRoutingModule} from "./contact.routing.module";
import {PortofolioRoutingModule} from "../portofolio/portofolio.routing.module";
import {MaterialModule} from "../../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ContactService} from "./contact.service";

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [ContactComponent],
  exports: [ContactComponent],
  providers:[ContactService]
})
export class ContactModule { }
