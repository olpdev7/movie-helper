import { Movie } from './';

export interface DiscoverResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
}
