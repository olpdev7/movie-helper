import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators'

import { MovieDbService } from '../services/movie-db.service';
import { Injectable } from '@angular/core';
import { ToolbarService } from '../services/toolbar.service';

@Injectable()
export class FilmDetailsResolver implements Resolve<any> {
  constructor(private movieDbService: MovieDbService, private toolbarService: ToolbarService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.movieDbService.getFilm(route.params.id).pipe(
      map(film => {
        this.toolbarService.toolbarPartialValue$.next({title: film.original_title});
        return film;
      }));
  }
}
