import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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
  private defaultParams: any = {
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
        ...this.discoverParams,
        ...this.defaultParams
      }
    };

    return this.http.get<DiscoverResult>(url, options);
  }

  discoverMoviesAndBroadcast(discoverParams: DiscoverParams): void {
    this.discoverMovies(discoverParams).subscribe((discoverResult: DiscoverResult) => {
      this.discoverResults$.next(discoverResult);
    }, (err: HttpErrorResponse) => {
      console.log(err)
    });
  }

  getMovieDetails(id: string): Observable<MovieDetails> {
    const url = `${environment.movieDbApiRooutUrl}/movie/${id}`;
    const options = {
      params: this.defaultParams
    };
    return this.http.get<MovieDetails>(url, options);
  }

  // getGenres() {
  //   const url = `${environment.movieDbApiRooutUrl}/genre/tv/list`;
  //   const options = {
  //     params: this.constructHttpParams()
  //   };
  //   return this.http.get(url, options);
  // }

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
