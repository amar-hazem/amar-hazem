import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import { CreateUserDto } from './create-user.dto';
import { ReplaceUserDto } from './replace-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { User } from './user.schema';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(@Inject('ACCOUNTS_SERVICE') private readonly clientProxy: ClientProxy) {}

  public create(createUserDto: CreateUserDto): Observable<User> {
    this.logger.log(`create ${createUserDto}`);
    return this.clientProxy.send<User>({ cmd: 'createUser' }, createUserDto);
  }

  public findAll(query: any): Observable<User[]> {
    this.logger.log(`findAll ${query}`);
    return this.clientProxy.send<User[]>({ cmd: 'findAllUsers' }, query);
  }

  public findOne(id: string): Observable<User | undefined> {
    this.logger.log(`findOne ${id}`);
    return this.clientProxy.send<User>({ cmd: 'findOneUser' }, id);
  }

  public remove(id: string): Observable<User> {
    this.logger.log(`remove ${id}`);
    return this.clientProxy.send<User>({ cmd: 'removeUser' }, id);
  }

  public replace(id: string, replaceUserDto: ReplaceUserDto): Observable<User | undefined> {
    this.logger.log(`update ${replaceUserDto}`);
    return this.clientProxy.send<User>({ cmd: 'replaceUser' }, replaceUserDto);
  }

  public update(id: string, updateUserDto: UpdateUserDto): Observable<User | undefined> {
    this.logger.log(`update ${updateUserDto}`);
    return this.clientProxy.send<User>({ cmd: 'updateUser' }, updateUserDto);
  }
}
