import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { objectKeysToCamelCase } from '../../services/utils'
/** Pass untouched request through to the next request handler. */
@Injectable()
export class CamelCaseCoverterInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).map(resp => {
      if (resp instanceof  HttpResponse) {
        return {
          ...resp,
          body: objectKeysToCamelCase(resp.body)
        } as any;

      }
      return resp;
    });
  }
}
