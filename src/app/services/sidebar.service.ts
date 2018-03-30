import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
  private sidebarState: boolean;

  toggleSidebar(): void {
    this.sidebarState = !this.sidebarState;
  }

  openSidebar(): void {
    this.sidebarState = true;
  }

  closeSidebar(): void {
    this.sidebarState = false;
  }

  get sidebarOpened(): boolean {
    return this.sidebarState;
  }
}
