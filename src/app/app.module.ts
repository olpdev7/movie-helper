import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TruncateModule } from 'ng2-truncate';

import { AppComponent } from './app.component';
import { DiscoverMovieMasterComponent } from './discover-movie-master/discover-movie-master.component';
import { DiscoverMovieFormComponent } from './discover-movie-master/discover-movie-form/discover-movie-form.component';
import { ToolbarPreloaderGuard } from './guards/toolbar-preloader.guard';
import { MaterialHubModule } from './material-hub/material-hub.module';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviePreviewComponent } from './movie-list/movie-preview/movie-preview.component';
import { MovieDetailsResolver } from './resolvers/movie-details.resolver';
import { AppRoutingModule } from './routing/app-routing.module';
import { MovieDbService } from './services/movie-db.service';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { StoreModule } from './store/store.module';
import { ToolbarContentComponent } from './toolbar-content/toolbar-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverMovieMasterComponent,
    MovieListComponent,
    MovieDetailsComponent,
    DiscoverMovieFormComponent,
    SidenavContentComponent,
    ToolbarContentComponent,
    MoviePreviewComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialHubModule,
    ReactiveFormsModule,
    TruncateModule,
    StoreModule
  ],
  providers: [
    MovieDetailsResolver,
    MovieDbService,
    ToolbarPreloaderGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
