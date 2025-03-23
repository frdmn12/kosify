import { request } from 'http';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotImplementedException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // LOGIN
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() input: { email: string; password: string }) {
    // throw new NotImplementedException('this method is not implemented');

    return this.authService.authenticate(input);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getUserInfo(@Request() request) {
    // throw new NotImplementedException();
    return request.user;
  }

  @Post('logout')
  logout() {
    throw new NotImplementedException();
  }
}
