import { combineReducers } from 'redux';

import { AppState } from '../interfaces';
import { appReducer } from '../reducers/app.reducer';

export const rootReducer = combineReducers({
  app: appReducer
});
