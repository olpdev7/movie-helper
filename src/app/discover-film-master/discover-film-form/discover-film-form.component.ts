import { Component, OnInit } from '@angular/core';
import { DiscoverParams } from '../../interfaces/discover-params.interface';

@Component({
  selector: 'app-discover-film-form',
  templateUrl: './discover-film-form.component.html',
  styleUrls: ['./discover-film-form.component.scss']
})
export class DiscoverFilmFormComponent implements OnInit {
  discoverParams: any = {primary_release_year: 2016};
  constructor() { }

  ngOnInit() {
  }

}
