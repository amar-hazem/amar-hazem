import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../users/user.schema';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(private readonly jwtService: JwtService, private readonly usersService: UsersService) {}

  public getProfile(user: User): Observable<User> {
    this.logger.log(`getProfile ${user}`);
    return of(user);
  }

  public login(user: any): Observable<any> {
    this.logger.log(`login ${user}`);
    return of({
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.userId,
      }),
    });
  }

  public validateUser(email: string, password: string): Observable<User> {
    this.logger.log(`validateUser ${email} ${password}`);
    return this.usersService.findOne(email).pipe(
      map((user: User) => {
        if (user?.password === password) {
          delete user.password;
          return user;
        }
        return null;
      })
    );
  }
}
