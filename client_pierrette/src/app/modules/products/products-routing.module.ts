import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
