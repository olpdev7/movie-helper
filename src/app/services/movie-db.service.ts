import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

import { environment } from '../../environments/environment';
import { DiscoverResult } from '../interfaces';

@Injectable()
export class MovieDbService {
  constructor(private http: HttpClient) { }

  discoverFilms(): Observable<DiscoverResult> {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${environment.MOVIE_DB_KEY}&page=1&year=2016`;
    return this.http.get<DiscoverResult>(url);
  }

  discoverShows(): Observable<DiscoverResult> {
    return Observable.of(null);
  }
}
