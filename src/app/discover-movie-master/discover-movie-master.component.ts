import { Component, OnInit } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Router } from '@angular/router';

import { MovieDbService } from '../services/movie-db.service';
import { DiscoverParams } from '../interfaces';
import { CloseSidebarAction, sidebarActionTypes } from '../sidenav-content/actions';

@Component({
  selector: 'app-discover-movie-master',
  templateUrl: './discover-movie-master.component.html',
  styleUrls: ['./discover-movie-master.component.scss']
})
export class DiscoverMovieMasterComponent implements OnInit {
  discoverParams: DiscoverParams = {};

  constructor(private movieDbService: MovieDbService,
              private router: Router) { }

  ngOnInit(): void {}

  discoverMovies(): void {
    this.movieDbService.discoverMoviesAndBroadcast(this.discoverParams);
    this.movieDbService.discoverParams$.next(this.discoverParams);
    this.closeSidebar();
    this.router.navigate(['', 'list']);
  }

  @dispatch()
  closeSidebar(): CloseSidebarAction {
    return {
      type: sidebarActionTypes.closeSidebar
    };
  }

}
