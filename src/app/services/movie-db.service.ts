import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import {
  DiscoverParams,
  DiscoverResult,
  MovieDbConfiguration,
  MovieDetails,
MovieImages
} from '../interfaces/index';

@Injectable()
export class MovieDbService {
  readonly discoverResults$: BehaviorSubject<DiscoverResult>;
  readonly discoverParams$: BehaviorSubject<DiscoverParams>;

  private discoverParams: DiscoverParams;
  private configuration: MovieDbConfiguration;
  private defaultParams = {
    api_key: environment.movieDbAPiKey
  };

  constructor(private http: HttpClient) {
    this.discoverResults$ = new BehaviorSubject(
      {
        page: 0,
        total_results: 0,
        total_pages: 0,
        results: []
      });
    this.discoverParams$ = new BehaviorSubject({});
  }

  discoverMovies(discoverParams: DiscoverParams): Observable<DiscoverResult> {
    const url = `${environment.movieDbApiRooutUrl}/discover/movie`;
    const options = {
      params: {
        ...discoverParams,
        ...this.defaultParams
      } as any
    };

    return this.http.get<DiscoverResult>(url, options);
  }

  discoverMoviesAndBroadcast(discoverParams: DiscoverParams): Observable<DiscoverResult> {
    return this.discoverMovies(discoverParams)
      .pipe(
        tap((discoverResult: DiscoverResult) => {
          this.discoverResults$.next(discoverResult);
        }),
        catchError((err: HttpErrorResponse) => {
          console.log(err);
          return [];
        })
      );
  }

  getMovieDetails(id: string): Observable<MovieDetails> {
    const url = `${environment.movieDbApiRooutUrl}/movie/${id}`;
    const options = {
      params: this.defaultParams
    };
    return this.http.get<MovieDetails>(url, options);
  }

  getConfiguration(): Observable<MovieDbConfiguration> {
    const url = `${environment.movieDbApiRooutUrl}/configuration`;
    const options = {
      params: this.defaultParams
    };
    return this.http.get(url, options);
  }

  getMovieImages(id: string): Observable<MovieImages> {
    const url = `${environment.movieDbApiRooutUrl}/movie/${id}/images`;
    const options = {
      params: this.defaultParams
    };
    return this.http.get<MovieImages>(url, options);
  }
}
