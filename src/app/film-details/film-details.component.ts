import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  filmDetails;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // debugger
    this.filmDetails = this.route.snapshot.data.film;
    // this.filmDetails$.subscribe(f => console.log(f));
  }

}
