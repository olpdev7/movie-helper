import { Routes } from '@angular/router';

import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsResolver } from './resolvers/movie-details.resolver';
import { ToolbarPreloaderGuard } from '../shared/guards/toolbar-preloader.guard';

export const movieRoutes: Routes = [
  {
    path: 'list',
    component: MovieListComponent,
    canActivate: [
      ToolbarPreloaderGuard
    ]
  },
  {
    path: 'details/:id',
    component: MovieDetailsComponent,
    resolve: {
      movieDetails: MovieDetailsResolver
    },
    canActivate: [
      ToolbarPreloaderGuard
    ],
    data: {
      toolbar: {
        backRoute: ['']
      }
    }
  }
];
