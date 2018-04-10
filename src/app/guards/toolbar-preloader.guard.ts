import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { dispatch } from '@angular-redux/store';

import { ToolbarState } from '../interfaces';
import { SetToolbarAction, toolbarActionTypes } from '../toolbar-content/actions';

@Injectable()
export class ToolbarPreloaderGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const toolbarData: ToolbarState = route.data['toolbar'] || {};
    this.setToolbar(toolbarData);
    return true;
  }

  @dispatch()
  setToolbar(toolbarData: ToolbarState): SetToolbarAction {
    return {
      type: toolbarActionTypes.setToolbar,
      payload: toolbarData
    }
  }
}
