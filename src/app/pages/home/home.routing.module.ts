import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';

const HomeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'services',
        loadChildren: '../services/services.module#ServicesModule',

      },
      {
        path: 'products',
        loadChildren: '../products/products.module#ProductsModule',


      },
      {
        path: 'portofolio',
        loadChildren: '../portofolio/portofolio.module#PortofolioModule',


      },
      {
        path: 'contact',
        loadChildren: '../contact/contact.module#ContactModule',


      },
      {
        path: 'team',
        loadChildren: '../team/team.module#TeamModule',


      },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class HomeRoutingModule {
}
