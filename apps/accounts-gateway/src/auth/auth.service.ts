import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import { User } from '../users/user.schema';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(@Inject('ACCOUNTS_SERVICE') private readonly clientProxy: ClientProxy) {}

  public getProfile(user: User): Observable<User> {
    this.logger.log(`getProfile ${user}`);
    return this.clientProxy.send<any>({ cmd: 'getProfile' }, user);
  }

  public login(user: any): Observable<any> {
    this.logger.log(`login ${user}`);
    return this.clientProxy.send<any>({ cmd: 'login' }, user);
  }

  async validateUser(username: string, pass: string): Promise<any> {
    this.logger.log(`validateUser ${username} ${pass}`);
    return this.clientProxy.send<any>({ cmd: 'validateUser' }, { username, pass });
  }
}
