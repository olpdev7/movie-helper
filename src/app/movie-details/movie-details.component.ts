import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dispatch } from '@angular-redux/store';

import { HideProgressBarAction } from '../actions/app-utils.actions';
import { appUtilsActionTypes } from '../actions/index';
import { environment } from '../../environments/environment';
import { MovieDetails, MovieImages  } from '../interfaces';
import { MovieDbService } from '../services/movie-db.service';

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
        },
        () => this.hideProgressBar());
  }

  getImageUrl(imageFilePath: string): string {
    return `${environment.movieDbImagesUrl}/${imageFilePath}`;
  }

  @dispatch()
  hideProgressBar(): HideProgressBarAction {
    return {
      type: appUtilsActionTypes.hideProgressBar
    }
  }
}
