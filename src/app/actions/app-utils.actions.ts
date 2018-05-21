import { AnyAction } from 'redux';

export enum appUtilsActionTypes {
  toggleProgressBar = '[AppUtils] toggle progress bar',
  showProgressBar = '[AppUtils] show progress bar',
  hideProgressBar = '[AppUtils] hide progress bar'
}

export class HideProgressBarAction implements AnyAction {
  type: appUtilsActionTypes.hideProgressBar;
}
