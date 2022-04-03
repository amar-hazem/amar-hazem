import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { EmailsModule } from '../emails/emails.module';
import { environment } from '../environments/environment';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [() => environment],
    }),
    EmailsModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://${configService.get('mongo.host')}:${configService.get('mongo.port')}/${configService.get(
          'mongo.name'
        )}`,
      }),
    }),
  ],
})
export class AppModule {}
