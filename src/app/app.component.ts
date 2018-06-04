import { Component } from '@angular/core';
import { dispatch, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { CloseSidebarAction, sidebarActionTypes } from './core/sidenav-content/actions/sidebar.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showProgressBar: boolean;

  @select(['sidebar', 'opened'])
  sidebarOpened$: Observable<boolean>;

  @select(['appUtils', 'progressBarShowed'])
  progressBarShowed$: Observable<boolean>;

  @dispatch()
  onCLosedStart(): CloseSidebarAction {
    return {
      type: sidebarActionTypes.closeSidebar
    }
  }
}
