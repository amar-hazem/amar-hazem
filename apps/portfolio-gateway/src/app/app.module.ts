import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';

import { EmailsModule } from '../emails/emails.module';
import { environment } from '../environments/environment';

/** Main module used for configuring the application. */
@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [() => environment],
    }),
    EmailsModule,
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        limit: configService.get('throttle.limit'),
        ttl: configService.get('throttle.ttl'),
      }),
    }),
  ],
})
export class AppModule {}
