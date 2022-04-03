import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import { User } from '../users/user.schema';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: 'getProfile' })
  public getProfile(user: User): Observable<User> {
    this.logger.log('getProfile');
    return this.authService.getProfile(user);
  }

  @MessagePattern({ cmd: 'login' })
  public login(user: User): Observable<any> {
    this.logger.log('login');
    return this.authService.login(user);
  }

  @MessagePattern({ cmd: 'validateUser' })
  public validateUser(credentials: any): Observable<User> {
    this.logger.log('login');
    return this.authService.validateUser(credentials.email, credentials.password);
  }
}
