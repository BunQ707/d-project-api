import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import JwtAccessGuard from 'src/guards/jwt-access.guard';
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

  @Get('profile')
  @ApiOperation({
    operationId: 'getProfile',
    summary: 'get your profile',
  })
  @UseGuards(JwtAccessGuard)
  @ApiBearerAuth()
  async getProfile(@Request() req) {
    return this.userService.findById(req.user._id, true);
  }
}
