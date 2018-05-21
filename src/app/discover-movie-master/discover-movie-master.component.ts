import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { dispatch } from '@angular-redux/store';

import { DiscoverParams } from '../interfaces';
import { DiscoverMovieFormComponent } from './discover-movie-form/discover-movie-form.component';
import { MovieDbService } from '../services/movie-db.service';
import { CloseSidebarAction, sidebarActionTypes } from '../sidenav-content/actions';

@Component({
  selector: 'app-discover-movie-master',
  templateUrl: './discover-movie-master.component.html',
  styleUrls: ['./discover-movie-master.component.scss']
})
export class DiscoverMovieMasterComponent {
  discoverParams: DiscoverParams = {};

  @ViewChild(DiscoverMovieFormComponent)
  discoverForm: DiscoverMovieFormComponent;

  constructor(private movieDbService: MovieDbService,
              private router: Router) { }

  discoverMovies(): void {
    this.movieDbService.discoverMoviesAndBroadcast(this.discoverParams).subscribe();
    this.movieDbService.discoverParams$.next(this.discoverParams);
    this.closeSidebar();
    this.router.navigate(['', 'list']);
  }

  resetForm(): void {
    this.discoverForm.discoverForm.reset();
  }

  @dispatch()
  closeSidebar(): CloseSidebarAction {
    return {
      type: sidebarActionTypes.closeSidebar
    };
  }

  get formValid(): boolean {
    return this.discoverForm.discoverForm.valid;
  }

}
