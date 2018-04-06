import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../services/sidebar.service';
import { ToolbarService } from '../services/toolbar.service';
import { ToolbarData } from '../interfaces';

@Component({
  selector: 'app-toolbar-content',
  templateUrl: './toolbar-content.component.html',
  styleUrls: ['./toolbar-content.component.scss']
})
export class ToolbarContentComponent implements OnInit {
  toolbarData: ToolbarData = {};

  constructor(private sidebarService: SidebarService,
              private toolbarService: ToolbarService) { }

  ngOnInit(): void {
    this.toolbarService.toolbarState$.subscribe(toolbarData => {
      this.toolbarData = toolbarData;
    });

    this.toolbarService.toolbarPartialValue$.subscribe(toolbarData => {
      this.toolbarData = {...this.toolbarData, ...toolbarData  };
    });
  }

  toggleSidebar(): void {
    this.sidebarService.toggleSidebar();
  }
}
