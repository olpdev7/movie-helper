import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TruncateModule } from 'ng2-truncate';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MaterialHubModule } from './material-hub/material-hub.module';
import { DiscoverMovieMasterComponent } from './discover-movie-master/discover-movie-master.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { MovieDbService } from './services/movie-db.service';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SidebarService } from './services/sidebar.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailsResolver } from './resolvers/movie-details.resolver';
import { DiscoverMovieFormComponent } from './discover-movie-master/discover-movie-form/discover-movie-form.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { ToolbarContentComponent } from './toolbar-content/toolbar-content.component';
import { MoviePreviewComponent } from './movie-list/movie-preview/movie-preview.component';
import { ToolbarService } from './services/toolbar.service';
import { ToolbarPreloaderGuard } from './guards/toolbar-preloader.guard';
import { StoreModule } from './store/store.module';

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
    SidebarService,
    ToolbarService,
    ToolbarPreloaderGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
