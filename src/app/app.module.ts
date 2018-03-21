import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MaterialHubModule } from './material-hub/material-hub.module';
import { DiscoverFilmMasterComponent } from './discover-film-master/discover-film-master.component';
import { AppRoutingModule } from './routing/routing.module';
import { MovieDbService } from './services/movie-db.service';
import { FilmListComponent } from './film-list/film-list.component';
import { SidebarService } from './services/sidebar.service';
import { FilmDetailsComponent } from './film-details/film-details.component';
// import {CamelCaseCoverterInterceptor} from './services/camel-case-converter.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverFilmMasterComponent,
    FilmListComponent,
    FilmDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialHubModule
  ],
  providers: [
    MovieDbService,
    SidebarService
    // { provide: HTTP_INTERCEPTORS, useClass: CamelCaseCoverterInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
