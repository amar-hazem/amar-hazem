import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, Observable } from 'rxjs';

import { CreateUserDto } from './create-user.dto';
import { ReplaceUserDto } from './replace-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { User } from './user.schema';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  public create(createUserDto: CreateUserDto): Observable<User> {
    this.logger.log(`create ${createUserDto}`);
    const createdUser = new this.userModel(createUserDto);
    return from(createdUser.save());
  }

  public findAll(query: any): Observable<User[]> {
    this.logger.log(`findAll ${query}`);
    return from(this.userModel.find().limit(query.limit).exec());
  }

  public findOne(id: string): Observable<User | undefined> {
    this.logger.log(`findOne ${id}`);
    return from(this.userModel.findById(id));
  }

  public remove(id: string): Observable<User> {
    this.logger.log(`remove ${id}`);
    return from(this.userModel.findByIdAndDelete(id));
  }

  public replace(replaceUserDto: ReplaceUserDto): Observable<User> {
    this.logger.log(`replace ${replaceUserDto}`);
    return from(this.userModel.findByIdAndUpdate(replaceUserDto._id, replaceUserDto, { upsert: true }));
  }

  public update(updateUserDto: UpdateUserDto): Observable<User> {
    this.logger.log(`update ${updateUserDto}`);
    return from(this.userModel.findByIdAndUpdate(updateUserDto._id, updateUserDto));
  }
}
