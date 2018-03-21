import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../services/sidebar.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MovieDbService } from '../services/movie-db.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films$: BehaviorSubject<any>;
  constructor(private movieDbService: MovieDbService,
              private sidebarService: SidebarService) { }

  ngOnInit() {
    this.films$ = this.movieDbService.films$;
  }

  openSidebar(): void {
    this.sidebarService.openSidebar();
  }

}
