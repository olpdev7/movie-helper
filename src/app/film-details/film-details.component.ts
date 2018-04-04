import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MovieDbService } from '../services/movie-db.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

  filmDetails;
  filmImages = [];

  constructor(private route: ActivatedRoute, private movieDbService: MovieDbService) { }

  ngOnInit() {
    this.filmDetails = this.route.snapshot.data.film;
    this.movieDbService.getMovieImages(this.filmDetails.id).subscribe((imgs: any) => {
      this.filmImages = imgs.backdrops.slice(0, 5);
    })
  }
}
