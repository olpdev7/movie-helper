import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { MaterialHubModule } from './material-hub/material-hub.module';
import { DiscoverFilmMasterComponent } from './discover-film-master/discover-film-master.component';
import { AppRoutingModule } from './routing.module';
import { MovieDbService } from './services/movie-db.service';
import {CamelCaseCoverterInterceptor} from './services/camel-case-converter.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverFilmMasterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialHubModule
  ],
  providers: [
    MovieDbService,
    { provide: HTTP_INTERCEPTORS, useClass: CamelCaseCoverterInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
