import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MovieDbService } from '../services/movie-db.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FilmDetailsResolver implements Resolve<any> {
  constructor(private movieDbService: MovieDbService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.movieDbService.getFilm(route.params.id);
  }
}
