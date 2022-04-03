import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SendEmailDto } from './send-email.dto';

/** The service that processes email requests. */
@Injectable()
export class EmailsService {
  /** The logger to log requests. */
  private readonly logger = new Logger(EmailsService.name);

  /**
   * The constructor to inject dependencies.
   * @param {ConfigService} configService
   * @param {HttpService} httpService
   */
  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {}

  /**
   * Processes email sending requests.
   * @param {SendEmailDto} sendEmailDto
   * @return {Observable<string>}
   */
  public sendEmail(sendEmailDto: SendEmailDto): Observable<any> {
    this.logger.log(`sendEmail(${JSON.stringify(sendEmailDto)})`);
    return this.httpService
      .post(
        'https://api.sendinblue.com/v3/smtp/email',
        { ...sendEmailDto, to: [this.configService.get<any>('contactRecipient')] },
        {
          headers: {
            Accept: 'application/json',
            'api-key': this.configService.get<string>('sendInBlueApiKey'),
            'Content-Type': 'application/json',
          },
        }
      )
      .pipe(
        map((response: AxiosResponse<any>) => {
          return { status: response.status, statusText: response.statusText };
        })
      );
  }
}
