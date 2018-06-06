import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { movieRoutes } from '../movie/movie.routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'prefix'
  },
  ...movieRoutes
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true
  } )]
})
export class AppRoutingModule {}

