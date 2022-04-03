import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import { SendEmailDto } from './send-email.dto';

/** The service that processes email requests. */
@Injectable()
export class EmailsService {
  /** The logger to log requests. */
  private readonly logger = new Logger(EmailsService.name);

  constructor(@Inject('PORTFOLIO_SERVICE') private readonly clientProxy: ClientProxy) {}

  /**
   * Processes email sending requests.
   * @param {SendEmailDto} sendEmailDto
   * @return {Observable<string>}
   */
  public sendEmail(sendEmailDto: SendEmailDto): Observable<any> {
    this.logger.log(`sendEmail(${JSON.stringify(sendEmailDto)})`);
    return this.clientProxy.send<any>({ cmd: 'sendEmail' }, sendEmailDto);
  }
}
