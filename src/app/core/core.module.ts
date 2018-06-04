import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MaterialHubModule } from '../material-hub/material-hub.module';
import { MovieModule } from '../movie/movie.module';
import { MovieDetailsResolver } from '../movie/resolvers/movie-details.resolver';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { ToolbarPreloaderGuard } from '../shared/guards/toolbar-preloader.guard';
import { MovieDbService } from '../shared/services/movie-db.service';
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
    MovieDetailsResolver,
    MovieDbService,
    ToolbarPreloaderGuard,
  ],
})
export class CoreModule { }
