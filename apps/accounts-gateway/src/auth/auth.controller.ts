import { Controller, Get, Logger, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

import { User } from '../users/user.schema';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  public getProfile(@Request() request: any): Observable<User> {
    this.logger.log(`getProfile ${request}`);
    return this.authService.getProfile(request.user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  public login(@Request() request: any): Observable<any> {
    this.logger.log(`login ${request}`);
    return this.authService.login(request.user);
  }
}
