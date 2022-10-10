import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ type: String, required: true })
  email: string;

  @ApiProperty({ type: String, required: true })
  password: string;
}

export class SigninDto extends LoginDto {
  @ApiProperty({ type: String, required: true })
  name: string;
}
