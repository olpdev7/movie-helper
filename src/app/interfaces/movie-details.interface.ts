import { Genre } from './genre.interface';

export interface MovieDetails {
  genres: Genre[];
  id: string;
  original_title: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
}
