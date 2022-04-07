import { CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

/**
 * This guard prevents unauthenticated users to access a route.
 */
@Injectable({ providedIn: 'root' })
export class LoggedInGuard implements CanActivateChild {
  /**
   * Inject required responsive.
   *
   * @param authService The auth service.
   */
  public constructor(private authService: AuthService) {}

  /**
   * Authorize access to route if requirements are met.
   */
  public canActivateChild(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isLoggedIn();
  }
}
