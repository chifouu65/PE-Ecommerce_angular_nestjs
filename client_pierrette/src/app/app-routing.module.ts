import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./modules/not-found/not-found.component";
import {HomeRoutingModule} from "./modules/home/home-routing.module";
import {ProductsRoutingModule} from "./modules/products/products-routing.module";

const routes: Routes = [
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    HomeRoutingModule,
    ProductsRoutingModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
