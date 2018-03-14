import { Component, OnInit } from '@angular/core';

import { DiscoverResult } from '../interfaces';
import { MovieDbService } from '../services/movie-db.service';

@Component({
  selector: 'app-discover-film-master',
  templateUrl: './discover-film-master.component.html',
  styleUrls: ['./discover-film-master.component.css']
})
export class DiscoverFilmMasterComponent implements OnInit {
  genres: string;

  constructor(private movieDbService: MovieDbService) { }

  ngOnInit() {
    this.discoverFilms();
  }

  discoverFilms(): void {
    this.movieDbService
      .discoverFilms()
      .subscribe((discoverResult: DiscoverResult) => {
        console.log('finish', `films: ${discoverResult.totalResults}`);
      });

  }

}
