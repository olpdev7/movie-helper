import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaterialHubModule } from './material-hub/material-hub.module';
import { DiscoverFilmMasterComponent } from './discover-film-master/discover-film-master.component';
import { AppRoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverFilmMasterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MaterialHubModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
