import { ApiProperty } from '@nestjs/swagger';
import { SigninDto } from '../auth/auth.dto';
import { IsNumber } from 'class-validator';

export class NutritionDto {
  @ApiProperty({ type: Number, example: 0 })
  @IsNumber()
  Gender: number;

  @ApiProperty({ type: Number, example: 0 })
  @IsNumber()
  DiabetesType: number;

  @ApiProperty({ type: Number, example: 0 })
  @IsNumber()
  ActivityFactor: number;

  @ApiProperty({ type: Number, example: 0 })
  @IsNumber()
  Age: number;

  @ApiProperty({ type: Number, example: 0 })
  @IsNumber()
  Height: number;

  @ApiProperty({ type: Number, example: 0 })
  @IsNumber()
  Weight: number;
}
