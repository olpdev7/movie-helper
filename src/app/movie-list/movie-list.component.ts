import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';

import { SidebarService } from '../services/sidebar.service';
import { MovieDbService } from '../services/movie-db.service';
import {
  DiscoverParams,
  DiscoverResult, MatPaginatorOptions,
  Movie,
} from '../interfaces';

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
              private sidebarService: SidebarService) {
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
      });

    this.movieDbService.discoverParams$
      .subscribe((discoverParams: DiscoverParams) => {
        this.discoverParams = this.discoverParams;
      });
  }

  openSidebar(): void {
    this.sidebarService.openSidebar();
  }

  pageChanged(page: PageEvent): void {
    const discoverParams: DiscoverParams = {
      ...this.discoverParams,
      page: `${page.pageIndex + 1}`
    };
    this.movieDbService.discoverMoviesAndBroadcast(discoverParams);
  }

}
