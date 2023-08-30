import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeModule} from "./modules/home/home.module";
import {ShopModule} from "./modules/shop/shop.module";

const routes: Routes = [
  {
    path: "", component: HomeModule, title: "Home page"
  },
  {
    path: "shop", component: ShopModule, title: "Shop page"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
