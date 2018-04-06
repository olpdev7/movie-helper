import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators'

import { MovieDbService } from '../movie-db-services/services/movie-db.service';
import { ToolbarService } from '../services/toolbar.service';
import { MovieDetails } from '../interfaces';

@Injectable()
export class MovieDetailsResolver implements Resolve<MovieDetails> {
  constructor(private movieDbService: MovieDbService, private toolbarService: ToolbarService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieDetails> {
    return this.movieDbService.getMovie(route.params.id).pipe(
      tap((movieDetails: MovieDetails) => {
        this.toolbarService.toolbarPartialValue$.next({title: movieDetails.original_title});
      }));
  }
}
