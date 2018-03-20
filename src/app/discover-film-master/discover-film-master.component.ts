import { Component, OnInit } from '@angular/core';

import { DiscoverResult } from '../interfaces';
import { MovieDbService } from '../services/movie-db.service';
import {DiscoverParams} from "../interfaces/discover-params.interface";

@Component({
  selector: 'app-discover-film-master',
  templateUrl: './discover-film-master.component.html',
  styleUrls: ['./discover-film-master.component.css']
})
export class DiscoverFilmMasterComponent implements OnInit {
  discoverParams: DiscoverParams = {};

  constructor(private movieDbService: MovieDbService) { }

  ngOnInit() {}

  discoverFilms(): void {
    this.movieDbService.getGenres().subscribe(res => console.log(res));
    this.movieDbService
      .discoverFilms(this.discoverParams)
      .subscribe((discoverResult: DiscoverResult) => {
        console.log('finish', `films: ${discoverResult.total_results}`);
      });

  }

}
