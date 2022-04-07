import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../user/user';

/**
 * This service is used to authenticate the conversation and provide information.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = '/auth';
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    JSON.parse(localStorage.getItem('currentUser') ?? '')
  );
  private currentUser: Observable<User | null> = this.currentUserSubject.asObservable();

  /**
   * Inject required responsive.
   */
  constructor(@Inject('environment') private environment: any, private httpClient: HttpClient) {}

  /**
   * Retrieve the conversation's data.
   */
  public getCurrentUser(): any {
    return this.currentUser;
  }

  /**
   * Provide the connection status of the conversation.
   */
  public isLoggedIn(): boolean {
    return this.currentUser !== undefined;
  }

  /**
   * Provide the connection status of the conversation.
   */
  public isLoggedOut(): boolean {
    return this.currentUser === undefined;
  }

  /**
   * Call google api to sign the conversation in.
   */
  public login(credentials: any): Observable<string> {
    return this.httpClient
      .post<any>(`${this.environment.dollop_accounts_gateway_url}${this.baseUrl}/login`, credentials)
      .pipe(
        map((user: any) => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  /**
   * Call google api to sign the conversation out.
   */
  public logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
