import { ClientsModule, Transport } from '@nestjs/microservices';
import { Test } from '@nestjs/testing';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

describe('AuthService', () => {
  let service: AuthService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      controllers: [AuthController],
      imports: [ClientsModule.register([{ name: 'ACCOUNTS_SERVICE', transport: Transport.TCP }])],
      providers: [AuthService],
    }).compile();

    service = app.get<AuthService>(AuthService);
  });

  describe('sendEmail', () => {
    it('should', () => {
      expect(true).toEqual(true);
    });
  });
});
