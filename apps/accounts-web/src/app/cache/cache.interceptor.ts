import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Interceptor that cache the data received.
 */
@Injectable({ providedIn: 'root' })
export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, any>();

  /**
   * Update or return cached data.
   *
   * @param request The caught request.
   * @param next The HTTP handler.
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method !== 'GET') {
      return next.handle(request);
    }
    const cachedResponse = this.cache.get(request.url);
    if (cachedResponse !== undefined) {
      return of(cachedResponse);
    }
    return next.handle(request).pipe(
      tap((event: any) => {
        if (event instanceof HttpResponse) {
          this.cache.set(request.url, event);
        }
      })
    );
  }
}
