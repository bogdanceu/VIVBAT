import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TeamComponent} from "./team.component";

const TeamRoutes: Routes = [
  {
    path: '',
    component : TeamComponent

  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TeamRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class TeamRoutingModule {
}
