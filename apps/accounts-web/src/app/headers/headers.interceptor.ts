import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../../../../../../../apps/accounts-web/src/app/auth/auth.service';

/**
 * Interceptor that adds headers to every HTTP requests.
 */
@Injectable({ providedIn: 'root' })
export class HeadersInterceptor implements HttpInterceptor {
  /**
   * The constructor for the component.
   */
  constructor(private authService: AuthService) {}

  /**
   * Add appropriate headers to each HTTP requests.
   *
   * @param request The caught request.
   * @param next The HTTP handler.
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = {
      setHeaders: {
        'Cache-Control': 'max-age=3600',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    };
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && currentUser.token) {
      headers.setHeaders['Authorization'] = `Bearer ${currentUser.token}`;
    }
    return next.handle(request.clone(headers));
  }
}
