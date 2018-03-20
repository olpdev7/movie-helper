import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import {DiscoverFilmMasterComponent} from '../discover-film-master/discover-film-master.component';
import {FilmListComponent} from "../film-list/film-list.component";

const routes: Routes = [
  {
    path: '',
    component: FilmListComponent
  },
  {
    path: 'discover',
    component: DiscoverFilmMasterComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}

