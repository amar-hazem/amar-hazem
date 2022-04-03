import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { EmailsController } from './emails.controller';
import { EmailsService } from './emails.service';

/** Mailing module used for configuring the mailing service. */
@Module({
  controllers: [EmailsController],
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'PORTFOLIO_SERVICE',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.REDIS,
          options: {
            url: `redis://${configService.get('redis.host')}:${configService.get('redis.port')}`,
          },
        }),
      },
    ]),
  ],
  providers: [EmailsService],
})
export class EmailsModule {}
