import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "./layout/layout.component";
import {RouterLink} from "@angular/router";
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    NavbarComponent,
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
