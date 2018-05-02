import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { MovieDbService } from '../services/movie-db.service';
import { MovieDetails, MovieImages  } from '../interfaces';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: MovieDetails;
  movieImages: MovieImages;

  constructor(private route: ActivatedRoute,
              private movieDbService: MovieDbService) {
    this.movieImages = {
      backdrops: []
    };
  }

  ngOnInit(): void {
    this.movieDetails = this.route.snapshot.data.movieDetails;
    this.movieDbService.getMovieImages(this.route.snapshot.params.id)
      .subscribe(
        (movieImages: MovieImages) => this.movieImages = movieImages,
        (error: HttpErrorResponse) => {
          console.log(error);
        });
  }

  getImageUrl(imageFilePath: string): string {
    return `${environment.movieDbImagesUrl}/${imageFilePath}`;
  }
}
