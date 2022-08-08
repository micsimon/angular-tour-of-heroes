import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize, tap} from "rxjs/operators";

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        tap({
          next: (event) => (console.log('### next')),
          error: (event) => (console.log('### error'))
        }),
        finalize(() => console.log('### finalze'))
      );
  }
}
