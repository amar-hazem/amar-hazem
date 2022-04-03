import { ClientsModule, Transport } from '@nestjs/microservices';
import { Test, TestingModule } from '@nestjs/testing';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AuthController],
      imports: [ClientsModule.register([{ name: 'ACCOUNTS_SERVICE', transport: Transport.TCP }])],
      providers: [AuthService],
    }).compile();
  });

  describe('sendEmail', () => {
    it('should', () => {
      expect(true).toEqual(true);
    });
  });
});
