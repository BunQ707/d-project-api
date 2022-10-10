import { Body, Controller, Get, Post } from '@nestjs/common';
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
  login(@Body() input: LoginDto) {
    return this.AuthService.login(input);
  }

  @Post('signin')
  async signin(@Body() input: CreateUserDto) {
    return this.AuthService.signin(input);
  }
}
