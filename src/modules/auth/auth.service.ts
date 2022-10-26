import {
  BadRequestException,
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from '../user/user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { LoginDto } from './auth.dto';
import { UserDocument } from '../user/user.chema';

@Injectable({})
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signin(payload: CreateUserDto) {
    // TODO: add input validator
    // if (!payload.email || !payload.password || !payload.name)
    if (!payload.email || !payload.password)
      throw new BadRequestException('Invalid input');

    if (await this.userService.findByEmail(payload.email)) {
      throw new ConflictException('Email used');
    }

    const salt = await bcrypt.genSalt();
    payload.password = await bcrypt.hash(payload.password, salt);

    await this.userService.create(payload);
  }

  async login(payload: LoginDto) {
    const jwtPayload = await this.validateUser(payload.email, payload.password);
    if (!jwtPayload) {
      throw new BadRequestException('Invalid user or password');
    }

    const accessToken = this.jwtService.sign(jwtPayload);

    return { accessToken: accessToken };
  }

  async validateUser(
    email: string,
    password: string,
    userId?: string,
  ): Promise<any> {
    let user: UserDocument;

    if (userId?.length > 0) {
      user = await this.userService.findById(userId);
    } else {
      user = await this.userService.findByEmail(email);
    }

    console.log(user);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const result = {
          _id: user._id,
          email: user.email,
          // name: user.name,
        };
        return result;
      }
      return null;
    }
    return null;
  }

  async changePassword(
    userId: string,
    currentPassword: string,
    newPassword: string,
  ): Promise<any> {
    const validateRes = await this.validateUser('', currentPassword, userId);
    if (validateRes === null)
      throw new BadRequestException('Invalid user or password');

    const salt = await bcrypt.genSalt();
    const encodedPasswrod = await bcrypt.hash(newPassword, salt);

    const res = await this.userService.changePassword(userId, encodedPasswrod);

    if (res?._id) return 'ok';
    else return 'notok';
  }
}
