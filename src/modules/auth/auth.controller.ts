import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import JwtAccessGuard from 'src/guards/jwt-access.guard';
import { CreateUserDto } from '../user/user.dto';
import { LoginDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Get()
  hlw() {
    return 'hello world';
  }

  @Post('login')
  async login(@Body() input: LoginDto) {
    return this.AuthService.login(input);
  }

  @Post('signin')
  async signin(@Body() input: CreateUserDto) {
    return this.AuthService.signin(input);
  }

  @Get('test-auth')
  @ApiBearerAuth()
  @UseGuards(JwtAccessGuard)
  async testAuth() {
    return 'this text is protected';
  }
}
