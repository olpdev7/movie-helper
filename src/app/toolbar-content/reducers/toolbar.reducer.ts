import { AnyAction } from 'redux';

import { ToolbarState } from '../../interfaces';
import { toolbarActionTypes } from '../actions';

export const toolbarInitialState: ToolbarState = {
  backRoute: null
};

export function toolbarReducer(state: ToolbarState = toolbarInitialState, action: AnyAction): ToolbarState {
  switch (action.type) {
    case toolbarActionTypes.patchToolbar:
      return {
        ...state,
        ...action.payload
      };
    case toolbarActionTypes.setToolbar:
      return {
        ...action.payload
      };
    default:
      return state;
  }
}
