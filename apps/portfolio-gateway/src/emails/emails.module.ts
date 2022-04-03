import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { EmailsController } from './emails.controller';
import { EmailsService } from './emails.service';

/** Mailing module used for configuring the mailing service. */
@Module({
  controllers: [EmailsController],
  imports: [ClientsModule.register([{ name: 'PORTFOLIO_SERVICE', transport: Transport.TCP }])],
  providers: [EmailsService],
})
export class EmailsModule {}
