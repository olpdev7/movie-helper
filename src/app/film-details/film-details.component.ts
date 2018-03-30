import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

  filmDetails;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.filmDetails = this.route.snapshot.data.film;
  }
}
