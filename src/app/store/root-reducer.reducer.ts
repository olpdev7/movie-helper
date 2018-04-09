import { combineReducers, Reducer, ReducersMapObject } from 'redux';

import { AppState } from '../interfaces';
import { appReducer } from '../reducers/app.reducer';

const reducers: ReducersMapObject = {
  app: appReducer
};

export const rootReducer: Reducer<AppState> = combineReducers(reducers);
