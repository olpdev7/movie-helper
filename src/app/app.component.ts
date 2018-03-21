import { Component } from '@angular/core';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private sidebarService: SidebarService) {}

  get sidebarOpened(): boolean {
    return this.sidebarService.sidebarOpened;
  }

  toggleSidebar(): void {
    this.sidebarService.toggleSidebar();
  }
}
