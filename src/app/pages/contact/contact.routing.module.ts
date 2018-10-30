import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from "./contact.component";

const ContactRoutes: Routes = [
  {
    path: '',
    component : ContactComponent

  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ContactRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ContactRoutingModule {
}
