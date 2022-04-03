import { ConfigModule } from '@nestjs/config';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { environment } from '../environments/environment';
import { User } from './user.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('AppController', () => {
  let appController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      imports: [
        ConfigModule.forRoot({
          ignoreEnvFile: true,
          isGlobal: true,
          load: [() => environment],
        }),
      ],
      providers: [
        {
          provide: getModelToken(User.name),
          useValue: {
            username: 'username',
            password: 'password',
          },
        },
        UsersService,
      ],
    }).compile();

    appController = app.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });
});
