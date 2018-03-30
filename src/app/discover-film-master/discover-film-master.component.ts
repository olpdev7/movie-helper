import { Component, OnInit } from '@angular/core';

import { DiscoverResult } from '../interfaces';
import { MovieDbService } from '../services/movie-db.service';
import {DiscoverParams} from "../interfaces/discover-params.interface";

@Component({
  selector: 'app-discover-film-master',
  templateUrl: './discover-film-master.component.html',
  styleUrls: ['./discover-film-master.component.scss']
})
export class DiscoverFilmMasterComponent implements OnInit {
  discoverParams: DiscoverParams = {};

  constructor(private movieDbService: MovieDbService) { }

  ngOnInit() {}

  discoverFilms(): void {
    this.movieDbService.discoverFilms(this.discoverParams);
  }

}
