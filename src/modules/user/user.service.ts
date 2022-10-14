import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import Decimal from 'decimal.js';
import { Model } from 'mongoose';
import { calculateBMI } from 'src/shared/helper';
import { User, UserDocument } from './user.chema';
import { CreateUserDto, PredictDto } from './user.dto';

@Injectable({})
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const createdCat = new this.userModel(createUserDto);
    return createdCat.save();
  }

  async findByEmail(
    email: string,
    ignorePassword?: boolean,
  ): Promise<UserDocument> {
    return this.userModel
      .findOne({ email })
      .select(ignorePassword ? '-password' : '')
      .exec();
  }

  async findById(
    userId: string,
    ignorePassword?: boolean,
  ): Promise<UserDocument> {
    return this.userModel
      .findOne({ _id: userId })
      .select(ignorePassword ? '-password' : '')
      .exec();
  }

  parsePredictParam(input: PredictDto) {
    const BMI = calculateBMI(input.Weight, input.Height);

    return {
      Pregnancies: input.Pregnancies || 0,
      Insulin: input.Insulin || 0,
      BMI: BMI || 0,
      Age: input.Age || 0,
      Glucose: input.Glucose || 0,
      BloodPressure: input.BloodPressure || 0,
      DiabetesPedigreeFunction: input.DiabetesPedigreeFunction || 0,
      SkinThickness: input.SkinThickness || 0,
    };
  }

  async predict(input: PredictDto): Promise<boolean> {
    const {
      Pregnancies,
      Insulin,
      BMI,
      Age,
      Glucose,
      BloodPressure,
      DiabetesPedigreeFunction,
      SkinThickness,
    } = this.parsePredictParam(input);

    if (
      Pregnancies +
        Insulin +
        BMI +
        Age +
        Glucose +
        BloodPressure +
        DiabetesPedigreeFunction +
        SkinThickness <=
      0
    )
      throw new BadRequestException('Invalid input');

    let outcome: number = 0;

    if (Glucose <= 154.5 && BMI > 26.35 && Age <= 28.5 && BloodPressure > 37.0)
      outcome = 0;
    if (Glucose <= 154.5 && BMI > 26.35 && Age > 28.5 && Insulin <= 109.0)
      outcome = 0;
    if (Glucose <= 154.5 && BMI <= 26.35 && DiabetesPedigreeFunction <= 0.675)
      outcome = 0;
    if (
      Glucose > 154.5 &&
      BMI > 23.1 &&
      BloodPressure <= 93.0 &&
      Glucose > 165.5
    )
      outcome = 1;
    if (Glucose <= 154.5 && BMI > 26.35 && Age > 28.5 && Insulin > 109.0)
      outcome = 1;
    if (
      Glucose > 154.5 &&
      BMI > 23.1 &&
      BloodPressure <= 93.0 &&
      Glucose <= 165.5
    )
      outcome = 1;
    if (
      Glucose <= 154.5 &&
      BMI <= 26.35 &&
      DiabetesPedigreeFunction > 0.675 &&
      DiabetesPedigreeFunction > 0.706
    )
      outcome = 0;
    if (Glucose <= 154.5 && BMI > 26.35 && Age <= 28.5 && BloodPressure <= 37.0)
      outcome = 1;
    if (
      Glucose > 154.5 &&
      BMI > 23.1 &&
      BloodPressure > 93.0 &&
      Pregnancies > 2.0
    )
      outcome = 0;
    if (Glucose > 154.5 && BMI <= 23.1) outcome = 0;
    if (
      Glucose > 154.5 &&
      BMI > 23.1 &&
      BloodPressure > 93.0 &&
      Pregnancies <= 2.0
    )
      outcome = 1;
    if (
      Glucose <= 154.5 &&
      BMI <= 26.35 &&
      DiabetesPedigreeFunction > 0.675 &&
      DiabetesPedigreeFunction <= 0.706
    )
      outcome = 1;

    return outcome === 1;
  }
}
