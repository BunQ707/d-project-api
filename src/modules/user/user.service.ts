import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.chema';
import { CreateUserDto } from './user.dto';

@Injectable({})
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const createdCat = new this.userModel(createUserDto);
    return createdCat.save();
  }

  async findByEmail(email: string): Promise<UserDocument> {
    return this.userModel.findOne({ email }).exec();
  }
}
