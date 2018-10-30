import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {ProductsRoutingModule} from "./products.routing.module";
import {MaterialModule} from "../../material/material.module";

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ],
  declarations: [ProductsComponent],
  exports: [ProductsComponent]
})
export class ProductsModule { }
