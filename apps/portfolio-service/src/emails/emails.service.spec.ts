import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { Test } from '@nestjs/testing';

import { EmailsService } from './emails.service';
import { environment } from '../environments/environment';

describe('EmailsService', () => {
  let service: EmailsService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          ignoreEnvFile: true,
          isGlobal: true,
          load: [() => environment],
        }),
        HttpModule,
      ],
      providers: [EmailsService],
    }).compile();

    service = app.get<EmailsService>(EmailsService);
  });

  describe('sendEmail', () => {
    it('should', () => {
      expect(true).toEqual(true);
    });
  });
});
