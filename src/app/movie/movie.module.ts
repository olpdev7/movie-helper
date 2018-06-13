import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TruncateModule } from 'ng2-truncate';

import { DiscoverMovieMasterComponent } from './discover-movie-master/discover-movie-master.component';
import { DiscoverMovieFormComponent } from './discover-movie-master/discover-movie-form/discover-movie-form.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MaterialHubModule } from '../material-hub/material-hub.module';
import { MoviePreviewComponent } from './movie-list/movie-preview/movie-preview.component';
import { MovieRoutingModule } from './movie-routing.module';

@NgModule({
  exports: [
    DiscoverMovieMasterComponent,
    MovieListComponent,
    MovieDetailsComponent,
    DiscoverMovieFormComponent,
    MoviePreviewComponent,
  ],
  declarations: [
    DiscoverMovieMasterComponent,
    MovieListComponent,
    MovieDetailsComponent,
    DiscoverMovieFormComponent,
    MoviePreviewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialHubModule,
    MovieRoutingModule,
    ReactiveFormsModule,
    TruncateModule,
  ]
})
export class MovieModule { }
