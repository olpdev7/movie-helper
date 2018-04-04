import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operator/filter';
// import { Observable } from 'rxjs/Observable'

import { SidebarService } from '../services/sidebar.service';
import { Observable } from 'rxjs/Observable';
import { ToolbarService } from '../services/toolbar.service';

@Component({
  selector: 'app-toolbar-content',
  templateUrl: './toolbar-content.component.html',
  styleUrls: ['./toolbar-content.component.scss']
})
export class ToolbarContentComponent implements OnInit {
  toolbarData = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sidebarService: SidebarService,
              private toolbarService: ToolbarService) { }

  ngOnInit() {
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
