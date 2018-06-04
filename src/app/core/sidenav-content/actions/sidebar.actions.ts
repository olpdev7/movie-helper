import { Action } from 'redux';

export const enum sidebarActionTypes {
  toggleSidebar = '[Sidebar] toggle',
  closeSidebar = '[Sidebar] close',
  openSidebar = '[Sidebar] open'
}

export class ToggleSidebarAction implements Action {
  type: string = sidebarActionTypes.toggleSidebar;
}

export class CloseSidebarAction implements Action {
  type: string = sidebarActionTypes.closeSidebar;
}

export class OpenSidebarAction implements Action {
  type: string = sidebarActionTypes.openSidebar;
}
