import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from '../auth/auth.module';
import { environment } from '../environments/environment';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [() => environment],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://${configService.get('mongo.host')}:${configService.get('mongo.port')}/${configService.get(
          'mongo.name'
        )}`,
      }),
    }),
    UsersModule,
  ],
})
export class AppModule {}
