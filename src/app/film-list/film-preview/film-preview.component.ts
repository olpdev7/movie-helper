import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-film-preview',
  templateUrl: './film-preview.component.html',
  styleUrls: ['./film-preview.component.scss']
})
export class FilmPreviewComponent implements OnInit {
  @Input() film;

  constructor(private route: ActivatedRoute, private router: Router, private sidebarService: SidebarService) { }

  ngOnInit() {}

  goToDetails(): void {
    this.sidebarService.closeSidebar();
    this.router.navigate(['', 'details', this.film.id]);
  }

}
