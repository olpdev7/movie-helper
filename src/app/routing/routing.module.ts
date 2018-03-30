import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import {DiscoverFilmMasterComponent} from '../discover-film-master/discover-film-master.component';
import {FilmListComponent} from "../film-list/film-list.component";
import { FilmDetailsComponent } from '../film-details/film-details.component';
import { FilmDetailsResolver } from '../resolvers/film-details.resolver';
import { TestComponent } from '../test/test.component';
import { ToolbarPreloaderGuard } from '../guards/toolbar-preloader.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'prefix'
  },
  {
    path: 'list',
    component: FilmListComponent,
    canActivate: [
      ToolbarPreloaderGuard
    ]
  },
  {
    path: 'details/:id',
    component: FilmDetailsComponent,
    resolve: {
      film: FilmDetailsResolver
    },
    canActivate: [
      ToolbarPreloaderGuard
    ],
    data: {
      toolbar: {
        backRoute: ['']
      }
    },
    children: [
      {
        path: 'test',
        component: TestComponent,
      }
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  } )]
})
export class AppRoutingModule {}

