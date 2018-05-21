import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToolbarPreloaderGuard } from '../guards/toolbar-preloader.guard';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MovieDetailsResolver } from '../resolvers/movie-details.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'prefix'
  },
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

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true
  } )]
})
export class AppRoutingModule {}

