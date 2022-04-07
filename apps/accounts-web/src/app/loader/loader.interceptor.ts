import { finalize } from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProgressBarService } from '../../../progress-bar/progress-bar-status/progress-bar/progress-bar.service';

/**
 * Interceptor that shows and hide the progress bar.
 */
@Injectable({ providedIn: 'root' })
export class LoaderInterceptor implements HttpInterceptor {
  /**
   * The constructor for the component.
   */
  constructor(private progressBarService: ProgressBarService) {}

  /**
   * Add appropriate headers to each HTTP requests.
   *
   * @param request The caught request.
   * @param next The HTTP handler.
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.progressBarService.setShowProgressBar(true);
    return next.handle(request).pipe(finalize(() => this.progressBarService.setShowProgressBar(false)));
  }
}
