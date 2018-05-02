import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { dispatch } from '@angular-redux/store';
import { HttpErrorResponse } from '@angular/common/http';

import { MovieDbService } from '../services/movie-db.service';
import { MovieDetails } from '../interfaces';
import { PatchToolbarAction, toolbarActionTypes } from '../toolbar-content/actions';

@Injectable()
export class MovieDetailsResolver implements Resolve<MovieDetails> {
  constructor(private movieDbService: MovieDbService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieDetails> {
    return this.movieDbService.getMovieDetails(route.params.id)
      .pipe(
        tap((movieDetails: MovieDetails) => {
          this.patchToolbar(movieDetails);
        }),
        catchError(this.handleError)
      );
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

  private handleError(error: HttpErrorResponse): ObservableInput<MovieDetails> {
    console.log(error);
    setTimeout(() => {
      this.router.navigate(['', 'list']);
    });
    const fakeMovieDetails: MovieDetails = {
      genres: [],
      id: '',
      original_title: '',
      backdrop_path: '',
      overview: '',
      release_date: ''
    };
    return [fakeMovieDetails];
  }
}
