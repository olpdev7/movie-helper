import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaterialHubModule } from './material-hub/material-hub.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialHubModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
