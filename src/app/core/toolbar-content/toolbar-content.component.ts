import { Component } from '@angular/core';
import { dispatch, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { ToolbarState } from '../../interfaces';
import { sidebarActionTypes, ToggleSidebarAction } from '../sidenav-content/actions';

@Component({
  selector: 'app-toolbar-content',
  templateUrl: './toolbar-content.component.html',
  styleUrls: ['./toolbar-content.component.scss']
})
export class ToolbarContentComponent {
  @select(['appUtils', 'progressBarShowed'])
  progressBarShowed$: Observable<boolean>;

  @select(['toolbar'])
  toolbarData$: Observable<ToolbarState>;

  @dispatch()
  toggleSidebar(): ToggleSidebarAction {
    return { type: sidebarActionTypes.toggleSidebar };
  }
}
