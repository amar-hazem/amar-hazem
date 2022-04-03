import { ClientsModule, Transport } from '@nestjs/microservices';
import { Test } from '@nestjs/testing';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';

describe('UsersService', () => {
  let service: UsersService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      controllers: [UsersController],
      imports: [ClientsModule.register([{ name: 'ACCOUNTS_SERVICE', transport: Transport.TCP }])],
      providers: [UsersService],
    }).compile();

    service = app.get<UsersService>(UsersService);
  });

  describe('sendEmail', () => {
    it('should', () => {
      expect(true).toEqual(true);
    });
  });
});
