import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "./layout/layout.component";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  exports: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class CoreModule { }
