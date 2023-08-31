import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {PagesModule} from "./modules/pages.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent, // main component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
