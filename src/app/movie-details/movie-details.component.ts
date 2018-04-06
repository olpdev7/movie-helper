import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieDbService } from '../movie-db-services/services/movie-db.service';
import { MovieDetails, MovieImages  } from '../interfaces';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails: MovieDetails;
  movieImages: MovieImages[] = [];

  constructor(private route: ActivatedRoute, private movieDbService: MovieDbService) { }

  ngOnInit(): void {
    this.movieDetails= this.route.snapshot.data.movie;
    this.movieDbService.getMovieImages(this.movieDetails.id)
      .subscribe((movieImages: MovieImages) => {
        this.movieImages= movieImages.backdrops.slice(0, 5);
      })
  }
}
