import { Action } from 'redux';

import { toolbarInitialState } from '../reducers';

export const enum toolbarActionTypes {
  patchToolbar = '[Toolbar] patch',
  setToolbar = '[Toolbar[ set'
}

export class PatchToolbarAction implements Action {
  type: string = toolbarActionTypes.patchToolbar;

  constructor(public payload = {}) {}
}

export class SetToolbarAction implements Action {
  type: string = toolbarActionTypes.setToolbar;

  constructor(public payload = toolbarInitialState) {}
}
