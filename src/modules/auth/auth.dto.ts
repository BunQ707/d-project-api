import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class SigninDto extends LoginDto {
  // @ApiProperty({ type: String })
  // @IsNotEmpty()
  // @IsString()
  // name: string;
}

export class NewPasswordDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  newPassword: string;
}
