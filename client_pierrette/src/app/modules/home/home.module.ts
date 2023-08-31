import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "./home-page/home-page.component";
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    HomePageComponent,
    ContactComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class HomeModule { }
