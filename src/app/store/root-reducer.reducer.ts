import { combineReducers, Reducer, ReducersMapObject } from 'redux';

import { AppState } from '../interfaces';
import { sidebarInitialState, sidebarReducer } from '../sidenav-content/reducers';
import { toolbarInitialState, toolbarReducer } from '../toolbar-content/reducers';

export const rootInitialState: AppState = {
  sidebar: sidebarInitialState,
  toolbar: toolbarInitialState
};

const reducers: ReducersMapObject = {
  sidebar: sidebarReducer,
  toolbar: toolbarReducer
};

export const rootReducer: Reducer<AppState> = combineReducers(reducers);
