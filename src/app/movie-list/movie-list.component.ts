import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { dispatch } from '@angular-redux/store';
import { Router } from '@angular/router';

import { appUtilsActionTypes } from '../actions/index';
import {
  DiscoverParams,
  DiscoverResult,
  MatPaginatorOptions,
  Movie,
} from '../interfaces';
import { CloseSidebarAction, OpenSidebarAction, sidebarActionTypes } from '../sidenav-content/actions';
import { MovieDbService } from '../services/movie-db.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  discoverParams: DiscoverParams;
  paginatorOptions: MatPaginatorOptions;

  constructor(private movieDbService: MovieDbService,
              private router: Router
  ) {
    this.paginatorOptions = {
      pageSize: 20,
      hidePageSize: true,
      length: 0,
      pageIndex: 0
    };
  }

  ngOnInit(): void {
    this.movieDbService.discoverResults$
      .subscribe((discoverResult: DiscoverResult) => {
        this.movies = discoverResult.results;
        this.paginatorOptions.length = discoverResult.total_results;
        this.paginatorOptions.pageIndex = discoverResult.page - 1;
        // TODO: change this
        document.querySelector('mat-sidenav-content').scrollTo(0, 0);
      });

    this.movieDbService.discoverParams$
      .subscribe((discoverParams: DiscoverParams) => {
        this.discoverParams = discoverParams;
      });
  }

  pageChanged(page: PageEvent): void {
    const discoverParams: DiscoverParams = {
      ...this.discoverParams,
      page: page.pageIndex + 1
    };
    this.showProgressBar();
    this.movieDbService.discoverMoviesAndBroadcast(discoverParams).subscribe(() => {
      this.hideProgressBar();
    });
  }

  @dispatch()
  openSidebar(): OpenSidebarAction {
    return { type: sidebarActionTypes.openSidebar };
  }

  @dispatch()
  linkClicked(routerLink: string[]): CloseSidebarAction {
    this.showProgressBar();
    this.router.navigate(routerLink);
    return { type: sidebarActionTypes.closeSidebar }
  }

  @dispatch()
  showProgressBar() {
    return {
      type: appUtilsActionTypes.showProgressBar
    }
  }

  @dispatch()
  hideProgressBar() {
    return {
      type: appUtilsActionTypes.hideProgressBar
    }
  }
}
