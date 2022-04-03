import { Body, Controller, Logger, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import { EmailsService } from './emails.service';
import { SendEmailDto } from './send-email.dto';

/** The controller that processes the email requests. */
@Controller('emails')
export class EmailsController {
  /** The logger to log requests. */
  private readonly logger = new Logger(EmailsController.name);

  /**
   * The constructor to inject dependencies.
   * @param {EmailsService} emailsService
   */
  constructor(private readonly emailsService: EmailsService) {}

  /**
   * Processes email sending requests.
   * @param {SendEmailDto} sendEmailDto
   * @return {Observable<string>}
   */
  @MessagePattern({ cmd: 'sendEmail' })
  @Post()
  public sendEmail(@Body() sendEmailDto: SendEmailDto): Observable<string> {
    this.logger.log(`sendEmail(${JSON.stringify(sendEmailDto)})`);
    return this.emailsService.sendEmail(sendEmailDto);
  }
}
