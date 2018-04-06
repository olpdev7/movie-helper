import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiKeyInjectorInterceptor } from './services/api-key-injector.interceptor';
import { MovieDbService } from './services/movie-db.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    MovieDbService,
    // { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInjectorInterceptor, multi: true }
  ]
})
export class MovieDbServicesModuleModule { }
