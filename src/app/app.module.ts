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
import { FilmDetailsResolver } from './resolvers/film-details.resolver';
import { DiscoverFilmFormComponent } from './discover-film-master/discover-film-form/discover-film-form.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { ToolbarContentComponent } from './toolbar-content/toolbar-content.component';
import { FilmPreviewComponent } from './film-list/film-preview/film-preview.component';
import { TestComponent } from './test/test.component';
import { ToolbarService } from './services/toolbar.service';
import { ToolbarPreloaderGuard } from './guards/toolbar-preloader.guard';
// import {CamelCaseCoverterInterceptor} from './services/camel-case-converter.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverFilmMasterComponent,
    FilmListComponent,
    FilmDetailsComponent,
    DiscoverFilmFormComponent,
    SidenavContentComponent,
    ToolbarContentComponent,
    FilmPreviewComponent,
    TestComponent
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
    FilmDetailsResolver,
    MovieDbService,
    SidebarService,
    ToolbarService,
    ToolbarPreloaderGuard
    // { provide: HTTP_INTERCEPTORS, useClass: CamelCaseCoverterInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
