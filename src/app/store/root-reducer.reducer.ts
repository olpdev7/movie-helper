import { combineReducers, Reducer, ReducersMapObject } from 'redux';

import { appUtilsInitialState, appUtilsReducer } from '../reducers/app-utils.reducer';
import { AppState } from '../interfaces';
import { sidebarInitialState, sidebarReducer } from '../sidenav-content/reducers';
import { toolbarInitialState, toolbarReducer } from '../toolbar-content/reducers';

export const rootInitialState: AppState = {
  appUtils: appUtilsInitialState,
  sidebar: sidebarInitialState,
  toolbar: toolbarInitialState
};

const reducers: ReducersMapObject = {
  appUtils: appUtilsReducer,
  sidebar: sidebarReducer,
  toolbar: toolbarReducer
};

export const rootReducer: Reducer<AppState> = combineReducers(reducers);
