import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


const MainRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MainRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class MainRoutingModule {
}
