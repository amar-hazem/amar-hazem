import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';

/**
 * Interceptor that shows the errors in a snack bar.
 */
@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {
  /**
   * The constructor for the component.
   */
  constructor(private matSnackBar: MatSnackBar) {}

  /**
   * Add appropriate headers to each HTTP requests.
   *
   * @param request The caught request.
   * @param next The HTTP handler.
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        this.matSnackBar.open(error.message);
        return throwError(error);
      })
    );
  }
}
