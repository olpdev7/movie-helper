import { Component, EventEmitter, Input, Output } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { Movie } from '../../../interfaces';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss']
})
export class MoviePreviewComponent {
  @Input() movie: Movie;
  @Output() linkClicked: EventEmitter<string[]> = new EventEmitter();

  goToDetails(): void {
    this.linkClicked.emit(['', 'details', this.movie.id]);
  }

  getImageUrl(imageFilePath): string {
    return `${environment.movieDbImagesUrl}/${imageFilePath}`;
  }
}
