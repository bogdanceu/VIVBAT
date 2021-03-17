import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortofolioComponent } from './portofolio.component';
import {PortofolioRoutingModule} from "./portofolio.routing.module";
import {CarouselModule} from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    PortofolioRoutingModule,
    CarouselModule
  ],
  declarations: [PortofolioComponent],
  exports:[PortofolioComponent]
})
export class PortofolioModule { }
