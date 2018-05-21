import { AppUtilsState } from './app-utils-state.interface';
import { SidebarState } from './sidebar-state.interface';
import { ToolbarState } from './toolbar-state.interface';

export interface AppState {
  appUtils: AppUtilsState
  sidebar: SidebarState;
  toolbar: ToolbarState;
}
