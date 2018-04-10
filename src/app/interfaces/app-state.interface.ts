import { SidebarState } from './sidebar-state.interface';
import { ToolbarState } from './toolbar-state.interface';

export interface AppState {
  sidebar: SidebarState;
  toolbar: ToolbarState;
}
