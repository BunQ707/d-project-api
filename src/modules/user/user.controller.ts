import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { PredictDto } from '../user/user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Post('predict')
  @ApiOperation({
    operationId: 'diabeticPrediction',
    summary: 'diabetic prediction',
  })
  async predict(@Body() input: PredictDto) {
    return this.userService.predict(input);
  }
}
