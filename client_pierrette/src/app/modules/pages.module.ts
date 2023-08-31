import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsModule} from "./products/products.module";
import {HomeModule} from "./home/home.module";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsModule,
    HomeModule
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class PagesModule { }
