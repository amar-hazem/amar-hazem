import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { EmailsController } from './emails.controller';
import { EmailsService } from './emails.service';

/** Mailing module used for configuring the mailing service. */
@Module({
  controllers: [EmailsController],
  imports: [HttpModule],
  providers: [EmailsService],
})
export class EmailsModule {}
