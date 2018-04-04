import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';

import { environment } from '../../environments/environment';
import { DiscoverResult } from '../interfaces';
import { DiscoverParams } from "../interfaces/discover-params.interface";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';

@Injectable()
export class MovieDbService {
  private _films$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private configuration: any;

  constructor(private http: HttpClient) { }

  get films$(): BehaviorSubject<any> {
    return this._films$;
  }

  discoverFilms(discoverParams: DiscoverParams): void {
    const url = `https://api.themoviedb.org/3/discover/movie`;
    const options = {
      params: {
        ...discoverParams,
        api_key: environment.MOVIE_DB_KEY
      }
    };
    this.http.get<DiscoverResult>(url, options).subscribe((discoverResult: DiscoverResult) => {
      this.films$.next(discoverResult.results);
    });
  }

  discoverShows(): Observable<DiscoverResult> {
    return Observable.of(null);
  }

  getFilm(id: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const options = {
      params: {
        api_key: environment.MOVIE_DB_KEY
      }
    };
    return this.http.get<DiscoverResult>(url, options);
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

  getConfiguration() {
    const url = `https://api.themoviedb.org/3/configuration`;
    const options = {
      params: {
        api_key: environment.MOVIE_DB_KEY
      }
    };
    return this.http.get(url, options).pipe(map(c => {
      this.configuration = c;
      return c;
    }));
  }

  getMovieImages(id: string) {
    const url = `https://api.themoviedb.org/3/movie/${id}/images`;
    const options = {
      params: {
        api_key: environment.MOVIE_DB_KEY
      }
    };
    return this.http.get<any>(url, options);
  }
}
