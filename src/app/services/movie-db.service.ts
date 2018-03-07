import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import { Film } from '../interfaces/film.interface';

@Injectable()
export class MovieDbService {
  discoverFilms(): Observable<Film[]> {
    return Observable.of([]);
  }

  discoverShows(): Observable<Film[]> {
    return Observable.of([]);
  }
}
