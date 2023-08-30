import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeModule} from "./home/home.module";
import {ShopModule} from "./shop/shop.module";

@NgModule({
  exports: [
    HomeModule,
    ShopModule
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
