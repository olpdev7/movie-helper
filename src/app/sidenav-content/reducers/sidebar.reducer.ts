import { Action } from 'redux';

import { sidebarActionTypes } from '../actions';
import { SidebarState } from '../../interfaces';

export const sidebarInitialState: SidebarState = {
  opened: false
};

export function sidebarReducer(state: SidebarState = sidebarInitialState, action: Action): SidebarState {
  switch (action.type) {
    case sidebarActionTypes.openSidebar:
      return {
        ...state,
        opened: true
      };
    case sidebarActionTypes.closeSidebar:
      return {
        ...state,
        opened: false
      };
    case sidebarActionTypes.toggleSidebar:
      return {
        ...state,
        opened: !state.opened
      };
    default:
      return state;
  }
}
