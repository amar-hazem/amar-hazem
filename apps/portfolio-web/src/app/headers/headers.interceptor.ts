import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/** Interceptor that adds headers to every HTTP requests. */
@Injectable({ providedIn: 'root' })
export class HeadersInterceptor implements HttpInterceptor {
  /**
   * Add appropriate headers to each HTTP requests.
   * @param {HttpRequest<any>} request The caught request.
   * @param {HttpHandler} next The HTTP handler.
   * @return {Observable<HttpEvent<any>>}
   */
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(
      request.clone({
        setHeaders: {
          Accept: 'application/json',
          'Cache-Control': 'max-age=3600',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
      })
    );
  }
}
