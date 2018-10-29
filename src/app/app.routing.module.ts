import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";

const AppRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {
}
