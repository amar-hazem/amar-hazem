import { Test } from '@nestjs/testing';

import { EmailsService } from './emails.service';
import { EmailsController } from './emails.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

describe('EmailsService', () => {
  let service: EmailsService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      controllers: [EmailsController],
      imports: [ClientsModule.register([{ name: 'PORTFOLIO_SERVICE', transport: Transport.TCP }])],
      providers: [EmailsService],
    }).compile();

    service = app.get<EmailsService>(EmailsService);
  });

  describe('send', () => {
    it('should', () => {
      expect(true).toEqual(true);
    });
  });
});
