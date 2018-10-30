import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "../pages/home/home.component";
import {HomeModule} from "../pages/home/home.module";


const MainRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MainRoutes),
    HomeModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class MainRoutingModule {
}
