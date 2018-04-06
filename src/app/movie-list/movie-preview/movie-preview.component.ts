import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { Movie } from '../../interfaces';
import { SidebarService } from '../../services/sidebar.service';

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

  getImageUrl(imageFilePath): string {
    return `${environment.movieDbImagesUrl}/${imageFilePath}`;
  }

}
