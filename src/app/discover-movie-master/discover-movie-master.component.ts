import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MovieDbService } from '../movie-db-services/services/movie-db.service';
import { DiscoverParams } from '../interfaces';

@Component({
  selector: 'app-discover-movie-master',
  templateUrl: './discover-movie-master.component.html',
  styleUrls: ['./discover-movie-master.component.scss']
})
export class DiscoverMovieMasterComponent implements OnInit {
  discoverParams: DiscoverParams = {};

  constructor(private movieDbService: MovieDbService, private router: Router) { }

  ngOnInit() {}

  discoverMovies(): void {
    this.movieDbService.discoverMoviesAndBroadcast(this.discoverParams);
    this.movieDbService.discoverParams$.next(this.discoverParams);
    this.router.navigate(['', 'list']);
  }

}
