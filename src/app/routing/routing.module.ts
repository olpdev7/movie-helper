import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import {DiscoverFilmMasterComponent} from '../discover-film-master/discover-film-master.component';
import {FilmListComponent} from "../film-list/film-list.component";
import { FilmDetailsComponent } from '../film-details/film-details.component';
import { FilmDetailsResolver } from '../resolvers/film-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: FilmListComponent
  },
  {
    path: 'discover',
    component: DiscoverFilmMasterComponent
  },
  {
    path: 'details/:id',
    component: FilmDetailsComponent,
    resolve: {
      film: FilmDetailsResolver
    }
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}

