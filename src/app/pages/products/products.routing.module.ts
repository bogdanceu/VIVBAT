import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from "./products.component";

const ProductsRoutes: Routes = [
  {
    path: '',
    component : ProductsComponent

  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductsRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ProductsRoutingModule {
}
