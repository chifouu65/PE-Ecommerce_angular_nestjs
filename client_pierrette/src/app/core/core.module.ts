import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "./layout/layout.component";

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  exports: [
    LayoutComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
