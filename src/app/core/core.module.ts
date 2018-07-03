import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MaterialHubModule } from '../material-hub/material-hub.module';
import { throwIfAlreadyLoaded } from './module-import.guard';
import { MovieModule } from '../movie/movie.module';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { ToolbarPreloaderGuard } from '../shared/guards/toolbar-preloader.guard';
import { StoreModule } from '../store/store.module';
import { ToolbarContentComponent } from './toolbar-content/toolbar-content.component';


@NgModule({
  declarations: [
    ToolbarContentComponent,
    SidenavContentComponent,
  ],
  exports: [
    ToolbarContentComponent,
    SidenavContentComponent,
    FormsModule,
    ReactiveFormsModule,
    MaterialHubModule
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MovieModule,
    MaterialHubModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule,
  ],
  providers: [
    ToolbarPreloaderGuard,
  ],
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
