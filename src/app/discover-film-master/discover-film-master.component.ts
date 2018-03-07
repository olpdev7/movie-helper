import { Component, OnInit } from '@angular/core';

import { Film } from '../interfaces/film.interface';
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
  }

  discoverFilms(): void {
    this.movieDbService
      .discoverFilms()
      .subscribe((films: Film[]) => console.log('finish', `films: ${films}`))
  }

}
