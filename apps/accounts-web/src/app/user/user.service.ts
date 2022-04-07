import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './user';
import { Observable } from 'rxjs';

/**
 * This service is used to interact with the users endpoint.
 */
@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly baseUrl: string = '/api/users';

  constructor(private http: HttpClient) {}

  /**
   * Gets the current user.
   */
  public create(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  /**
   * Gets the current user.
   */
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  /**
   * Gets the current user.
   */
  public findOne(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  /**
   * Gets the current user.
   */
  public remove(id: string): Observable<User> {
    return this.http.delete<User>(`${this.baseUrl}/${id}`);
  }

  /**
   * Gets the current user.
   */
  public replace(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, user);
  }

  /**
   * Gets the current user.
   */
  public update(id: string, user: User): Observable<User> {
    return this.http.patch<User>(`${this.baseUrl}/${id}`, user);
  }
}
