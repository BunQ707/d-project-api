import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { envConfig } from 'src/configs/env.config';

const { JWT_SECRET } = envConfig;

@Injectable()
export default class JwtAccessStrategy extends PassportStrategy(
  Strategy,
  'accessToken',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET,
    });
  }

  async validate(payload: any) {
    return { userId: payload._id, email: payload.email };
  }
}
