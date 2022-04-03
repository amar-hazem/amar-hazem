import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Email } from './email';

/** This service is used to interact with the emails endpoint. */
@Injectable({ providedIn: 'root' })
export class EmailService {
  /** The endpoint to query. */
  private endpoint = 'emails';

  /**
   * Inject dependencies in service.
   * @param {HttpClient} httpClient
   */
  constructor(private httpClient: HttpClient) {}

  /**
   * Send an email.
   * @param {Email} email The email to send.
   * @return {Observable<string>} Confirmation message.
   */
  public send(email: Email): Observable<string> {
    return this.httpClient.post<string>(this.endpoint, email);
  }
}
