import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TruncateModule } from 'ng2-truncate';

import { DiscoverMovieMasterComponent } from './discover-movie-master/discover-movie-master.component';
import { DiscoverMovieFormComponent } from './discover-movie-master/discover-movie-form/discover-movie-form.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MaterialHubModule } from '../material-hub/material-hub.module';
import { MovieDbService } from '../shared/services/movie-db.service';
import { MovieDetailsResolver } from './resolvers/movie-details.resolver';
import { MoviePreviewComponent } from './movie-list/movie-preview/movie-preview.component';
import { MovieRoutingModule } from './movie-routing.module';

@NgModule({
  exports: [
    DiscoverMovieMasterComponent,
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
  ],
  providers: [
    MovieDetailsResolver,
    MovieDbService,
  ]
})
export class MovieModule { }
