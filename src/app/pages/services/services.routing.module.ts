import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ServicesComponent} from "./services.component";

const ServicesRoutes: Routes = [
  {
    path: '',
    component : ServicesComponent

  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ServicesRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ServicesRoutingModule {
}
