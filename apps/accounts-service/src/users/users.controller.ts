import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import { CreateUserDto } from './create-user.dto';
import { ReplaceUserDto } from './replace-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { User } from './user.schema';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'createUser' })
  public create(createUserDto: CreateUserDto): Observable<User> {
    this.logger.log(`create ${createUserDto}`);
    return this.usersService.create(createUserDto);
  }

  @MessagePattern({ cmd: 'findAllUsers' })
  public findAll(query: any): Observable<User[]> {
    this.logger.log(`findAll ${query}`);
    return this.usersService.findAll(query);
  }

  @MessagePattern({ cmd: 'findOneUser' })
  public findOne(id: string): Observable<User> {
    this.logger.log(`findOne ${id}`);
    return this.usersService.findOne(id);
  }

  @MessagePattern({ cmd: 'removeUser' })
  public remove(id: string): Observable<User> {
    this.logger.log(`remove ${id}`);
    return this.usersService.remove(id);
  }

  @MessagePattern({ cmd: 'replaceUser' })
  public replace(replaceUserDto: ReplaceUserDto): Observable<User> {
    this.logger.log(`replace ${replaceUserDto}`);
    return this.usersService.replace(replaceUserDto);
  }

  @MessagePattern({ cmd: 'updateUser' })
  public update(updateUserDto: UpdateUserDto): Observable<User> {
    this.logger.log(`replace ${updateUserDto}`);
    return this.usersService.replace(updateUserDto);
  }
}
