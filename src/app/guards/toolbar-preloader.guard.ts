import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { ToolbarService } from '../services/toolbar.service';
import { ToolbarData } from '../interfaces';

@Injectable()
export class ToolbarPreloaderGuard implements CanActivate {
  constructor(private toolbarService: ToolbarService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let toolbarData: ToolbarData = route.data['toolbar'] || {};
    this.toolbarService.toolbarState$.next(toolbarData);
    return true;
  }
}
