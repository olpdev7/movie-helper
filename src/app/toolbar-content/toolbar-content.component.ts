import { Component, OnInit } from '@angular/core';
import { dispatch, NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { AppState, ToolbarState } from '../interfaces';
import { sidebarActionTypes, ToggleSidebarAction } from '../sidenav-content/actions';

@Component({
  selector: 'app-toolbar-content',
  templateUrl: './toolbar-content.component.html',
  styleUrls: ['./toolbar-content.component.scss']
})
export class ToolbarContentComponent implements OnInit {
  toolbarData: ToolbarState = {} as ToolbarState;

  @select(['appUtils', 'progressBarShowed'])
  progressBarShowed$: Observable<boolean>;

  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit(): void {
    this.ngRedux.select(['toolbar'])
      .subscribe((toolbarData: ToolbarState) => this.toolbarData = toolbarData);
  }

  @dispatch()
  toggleSidebar(): ToggleSidebarAction {
    return { type: sidebarActionTypes.toggleSidebar };
  }
}
