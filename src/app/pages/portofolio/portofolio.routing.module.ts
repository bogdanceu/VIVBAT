import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PortofolioComponent} from "./portofolio.component";

const PortofolioRoutes: Routes = [
  {
    path: '',
    component : PortofolioComponent

  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PortofolioRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class PortofolioRoutingModule {
}
