import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { objectKeysToCamelCase } from '../../services/utils'
import { environment } from '../../../environments/environment';
/** Pass untouched request through to the next request handler. */
@Injectable()
export class ApiKeyInjectorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      params: req.params.set('api_key', environment.movieDbAPiKey)
    });
    return next.handle(request);
  }
}
