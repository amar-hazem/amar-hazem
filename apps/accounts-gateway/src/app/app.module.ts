import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';

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
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        limit: configService.get('throttle.limit'),
        ttl: configService.get('throttle.ttl'),
      }),
    }),
    UsersModule,
  ],
})
export class AppModule {}
