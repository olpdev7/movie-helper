import { AnyAction } from 'redux';

import { appUtilsActionTypes} from '../actions';
import { AppUtilsState } from '../interfaces';

export const appUtilsInitialState: AppUtilsState = {
  progressBarShowed: false
};

export function appUtilsReducer(state = appUtilsInitialState, action: AnyAction): AppUtilsState {
  switch (action.type) {
    case appUtilsActionTypes.toggleProgressBar:
      return {
        ...state,
        progressBarShowed: !state.progressBarShowed
      };
    case appUtilsActionTypes.showProgressBar:
      return {
        ...state,
        progressBarShowed: true
      };
    case appUtilsActionTypes.hideProgressBar:
      return {
        ...state,
        progressBarShowed: false
      };
    default:
      return state;
  }
}
