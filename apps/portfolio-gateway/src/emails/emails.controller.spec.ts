import { Test, TestingModule } from '@nestjs/testing';

import { EmailsController } from './emails.controller';
import { EmailsService } from './emails.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

describe('EmailsController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [EmailsController],
      imports: [ClientsModule.register([{ name: 'PORTFOLIO_SERVICE', transport: Transport.TCP }])],
      providers: [EmailsService],
    }).compile();
  });

  describe('send', () => {
    it('should', () => {
      expect(true).toEqual(true);
    });
  });
});
