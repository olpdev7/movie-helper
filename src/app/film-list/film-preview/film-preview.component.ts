import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-preview',
  templateUrl: './film-preview.component.html',
  styleUrls: ['./film-preview.component.scss']
})
export class FilmPreviewComponent implements OnInit {
  @Input() film;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.route);
    // debugger
  }

}
