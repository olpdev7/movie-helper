import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { Middleware, StoreEnhancer } from 'redux';
import * as storeFreeze from 'redux-freeze';

import { rootInitialState, rootReducer } from './root-reducer.reducer';
import { AppState } from '../interfaces';
import { environment } from '../../environments/environment.prod';

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule
  ],
  declarations: []
})
export class StoreModule {
  constructor(private devTools: DevToolsExtension,
              private ngRedux: NgRedux<AppState >) {
    ngRedux.configureStore(
      rootReducer,
      rootInitialState,
      this.getMiddlewares(),
      this.getEnhancers());
  }

  getEnhancers(): StoreEnhancer<AppState>[] {
    return [
      ...this.devTools.isEnabled() ? [this.devTools.enhancer()] : []
    ];
  }

  getMiddlewares(): Middleware[] {
    if (environment.production) {
      return [];
    }
    return [storeFreeze];
  }
}
