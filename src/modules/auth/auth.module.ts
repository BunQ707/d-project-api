import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { envConfig } from 'src/configs/env.config';
import { PassportModule } from '@nestjs/passport';
import JwtAccessStrategy from './jwt-access.strategy';

const { JWT_SECRET } = envConfig;

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtAccessStrategy],
})
export class AuthModule {}
