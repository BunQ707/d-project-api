import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ type: String })
  email: string;

  @ApiProperty({ type: String })
  password: string;
}

export class SigninDto extends LoginDto {
  @ApiProperty({ type: String })
  name: string;
}
