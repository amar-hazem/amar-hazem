import { Body, Controller, Logger, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

import { EmailsService } from './emails.service';
import { SendEmailDto } from './send-email.dto';

/** The controller that processes the email requests. */
@ApiTags('emails')
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
  @ApiCreatedResponse({ description: 'The email has been successfully sent.' })
  @Post()
  public send(@Body() sendEmailDto: SendEmailDto): Observable<string> {
    this.logger.log(`send(${JSON.stringify(sendEmailDto)})`);
    return this.emailsService.send(sendEmailDto);
  }
}
