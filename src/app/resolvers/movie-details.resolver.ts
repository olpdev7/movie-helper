import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { dispatch } from '@angular-redux/store';

import { MovieDbService } from '../services/movie-db.service';
import { MovieDetails } from '../interfaces';
import { PatchToolbarAction, toolbarActionTypes } from '../toolbar-content/actions';

@Injectable()
export class MovieDetailsResolver implements Resolve<MovieDetails> {
  constructor(private movieDbService: MovieDbService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieDetails> {
    return this.movieDbService.getMovieDetails(route.params.id).pipe(
      tap((movieDetails: MovieDetails) => {
        this.patchToolbar(movieDetails);
      }));
  }

  @dispatch()
  patchToolbar(movieDetails: MovieDetails): PatchToolbarAction {
    return {
      type: toolbarActionTypes.patchToolbar,
      payload: {
        title: movieDetails.original_title
      }
    }
  }
}
