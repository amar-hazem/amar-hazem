import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { getModelToken } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { Test } from '@nestjs/testing';

import { environment } from '../environments/environment';
import { User } from '../users/user.schema';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';

describe.skip('AuthService', () => {
  let service: AuthService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          ignoreEnvFile: true,
          isGlobal: true,
          load: [() => environment],
        }),
        JwtModule.registerAsync({
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => ({
            secret: configService.get('jwt.secret'),
            signOptions: {
              expiresIn: configService.get('jwt.signOptions.expiresIn'),
            },
          }),
        }),
        PassportModule,
        UsersModule,
      ],
      providers: [
        AuthService,
        {
          provide: getModelToken(User.name),
          useValue: {
            username: 'username',
            password: 'password',
          },
        },
      ],
    }).compile();

    service = app.get<AuthService>(AuthService);
  });

  describe('sendEmail', () => {
    it('should', () => {
      expect(true).toEqual(true);
    });
  });
});
