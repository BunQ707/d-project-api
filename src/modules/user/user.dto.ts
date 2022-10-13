import { ApiProperty } from '@nestjs/swagger';
import { SigninDto } from '../auth/auth.dto';
import { IsNumber } from 'class-validator';

// export class UserDTO extends SigninDto {}

export class CreateUserDto extends SigninDto {}

export class PredictDto {
  @ApiProperty({ type: Number, example: 0 })
  @IsNumber()
  Pregnancies: number;

  @ApiProperty({ type: Number, example: 0 })
  @IsNumber()
  Insulin: number;

  @ApiProperty({ type: Number, example: 0 })
  @IsNumber()
  Height: number;

  @ApiProperty({ type: Number, example: 0 })
  @IsNumber()
  Weight: number;

  @ApiProperty({ type: Number, example: 0 })
  @IsNumber()
  Age: number;

  @ApiProperty({ type: Number, example: 0 })
  @IsNumber()
  Glucose: number;

  @ApiProperty({ type: Number, example: 0 })
  @IsNumber()
  BloodPressure: number;

  @ApiProperty({ type: Number, example: 0 })
  @IsNumber()
  DiabetesPedigreeFunction: number;

  @ApiProperty({ type: Number, example: 0 })
  @IsNumber()
  SkinThickness: number;
}
