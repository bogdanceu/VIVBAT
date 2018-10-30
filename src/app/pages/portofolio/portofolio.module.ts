import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortofolioComponent } from './portofolio.component';
import {PortofolioRoutingModule} from "./portofolio.routing.module";

@NgModule({
  imports: [
    CommonModule,
    PortofolioRoutingModule,
  ],
  declarations: [PortofolioComponent],
  exports:[PortofolioComponent]
})
export class PortofolioModule { }
