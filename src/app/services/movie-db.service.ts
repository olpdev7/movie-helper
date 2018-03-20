import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';

import { environment } from '../../environments/environment';
import { DiscoverResult } from '../interfaces';
import {DiscoverParams} from "../interfaces/discover-params.interface";

@Injectable()
export class MovieDbService {
  constructor(private http: HttpClient) { }

  discoverFilms(discoverParams: DiscoverParams): Observable<DiscoverResult> {
    const url = `https://api.themoviedb.org/3/discover/movie`;
    const options = {
      params: {
        ...discoverParams,
        api_key: environment.MOVIE_DB_KEY
      }
    };
    return this.http.get<DiscoverResult>(url, options);
  }

  discoverShows(): Observable<DiscoverResult> {
    return Observable.of(null);
  }

  getGenres() {
    const url = `https://api.themoviedb.org/3/genre/tv/list`;
    const options = {
      params: {
        api_key: environment.MOVIE_DB_KEY
      }
    };
    return this.http.get(url, options);
  }
}
