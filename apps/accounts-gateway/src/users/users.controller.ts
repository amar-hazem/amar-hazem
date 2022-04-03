import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUserDto } from './create-user.dto';
import { ReplaceUserDto } from './replace-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { User } from './user.schema';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(private readonly usersService: UsersService) {}

  @ApiCreatedResponse({ description: 'The user has been successfully created.' })
  @Post()
  public create(@Body() createUserDto: CreateUserDto): Observable<User> {
    this.logger.log(`create ${createUserDto}`);
    return this.usersService.create(createUserDto);
  }

  @ApiOkResponse({ description: 'A list of all users.' })
  @Get()
  @UseGuards(JwtAuthGuard)
  public findAll(@Query() query: any): Observable<User[]> {
    this.logger.log(`findAll ${query}`);
    return this.usersService.findAll(query);
  }

  @ApiOkResponse({ description: 'A list of all users.' })
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  public findOne(@Param('id') id: string): Observable<User> {
    this.logger.log(`findOne ${id}`);
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  public remove(@Param('id') id: string): Observable<User> {
    this.logger.log(`remove ${id}`);
    return this.usersService.remove(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  public replace(@Param('id') id: string, @Body() replaceUserDto: ReplaceUserDto): Observable<User> {
    this.logger.log(`update ${id} ${replaceUserDto}`);
    return this.usersService.replace(id, replaceUserDto);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  public update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Observable<User> {
    this.logger.log(`update ${id} ${updateUserDto}`);
    return this.usersService.update(id, updateUserDto);
  }
}
