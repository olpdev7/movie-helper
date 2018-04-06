import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SidebarService } from '../../services/sidebar.service';
import { Movie } from '../../interfaces';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss']
})
export class MoviePreviewComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private router: Router,
              private sidebarService: SidebarService) { }

  ngOnInit(): void {}

  goToDetails(): void {
    this.sidebarService.closeSidebar();
    this.router.navigate(['', 'details', this.movie.id]);
  }

}
