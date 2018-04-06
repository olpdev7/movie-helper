import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import {
  // applyMiddleware,
  Store,
  createStore
} from 'redux';

import { rootReducer } from './root-reducer.reducer';
import { AppState } from '../interfaces';

export const store: Store<AppState > = createStore(
  rootReducer,
  // applyMiddleware(createLogger())
);

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule
  ],
  declarations: []
})
export class StoreModule {
  constructor(ngRedux: NgRedux<AppState >) {
    ngRedux.provideStore(store);
  }
}
