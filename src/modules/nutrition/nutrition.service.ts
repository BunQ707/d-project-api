import { Injectable } from '@nestjs/common';
import { calculateBMI } from 'src/shared/helper';
import { NutritionDto } from './nutrition.dto';

import Rules from './rules';

const Logic = require('es6-fuzz/lib/logic');
const Trapezoid = require('es6-fuzz/lib/curve/trapezoid');
const Grade = require('es6-fuzz/lib/curve/grade');
const ReverseGrade = require('es6-fuzz/lib/curve/reverse-grade');
const Triangle = require('es6-fuzz/lib/curve/triangle');

enum Name {
  Male = 'Male',
  Female = 'Female',
  Type1 = 'TypeOne',
  Type2 = 'TypeTwo',
  Risk = 'Risk',
  Children = 'Children',
  Adolescence = 'Adolescence',
  Adult = 'Adult',
  Older = 'Older',
  Obese = 'Obese',
  Sedentary = 'Sedentary',
  Moderate = 'Moderate',
  Active = 'Active',
  UnderWeight = 'UnderWeight',
  Normal = 'Normal',
  OverWeight = 'OverWeight',
}

@Injectable({})
export class NutritionService {
  async recommendNutriPlan(input: NutritionDto) {
    const BMI = calculateBMI(input.Weight, input.Height);

    const genderLogic = new Logic()
      .init(Name.Male, new ReverseGrade(0, 0.6))
      .or(Name.Female, new Grade(0.5, 1));

    const diabetesTypeLogic = new Logic()
      .init(Name.Risk, new ReverseGrade(0, 0.6))
      .or(Name.Type1, new Triangle(0.4, 1, 1.6))
      .or(Name.Type2, new Grade(1.4, 2, 2.5));

    const ageGroupLogic = new Logic()
      .init(Name.Children, new ReverseGrade(0, 15))
      .or(Name.Adolescence, new Triangle(0, 15, 30))
      .or(Name.Adult, new Trapezoid(15, 30, 55, 70))
      .or(Name.Older, new Trapezoid(55, 70, 120, 121));

    // const activityFactorLogic = new Logic()
    //   .init(Name.Sedentary, new Trapezoid(0, 0, 0.2, 0.3))
    //   .or(Name.Moderate, new Trapezoid(0.2, 0.3, 0.7, 0.8))
    //   .or(Name.Active, new Trapezoid(0.7, 0.8, 1, 1));

    const bmiLogic = new Logic()
      .init(Name.UnderWeight, new Trapezoid(-1, 0, 16, 18))
      .or(Name.Normal, new Trapezoid(16, 18, 24, 26))
      .or(Name.OverWeight, new Trapezoid(24, 26, 29, 31))
      .or(Name.Obese, new Trapezoid(29, 31, 40, 41));

    const genderRes = genderLogic.defuzzify(input.Gender || 0);
    const diabetesTypeRes = diabetesTypeLogic.defuzzify(
      input.DiabetesType || 0,
    );
    const ageGroupRes = ageGroupLogic.defuzzify(input.Age || 0);
    // const activityFactorRes = activityFactorLogic.defuzzify(
    //   input.ActivityFactor || 0,
    // );
    const bmiRes = bmiLogic.defuzzify(BMI || 0);
    if (bmiRes) {
    }

    let recommendList = [];

    if (diabetesTypeRes?.rules[0]?.fuzzy > 0) recommendList = [...Rules.type0];
    else if (
      diabetesTypeRes?.rules[1]?.fuzzy > 0 ||
      diabetesTypeRes?.rules[2]?.fuzzy > 0
    ) {
      // general
      recommendList = [...recommendList, ...Rules.type12.general];

      //  type 1 and 2
      if (diabetesTypeRes?.rules[1]?.fuzzy > 0)
        recommendList = [...recommendList, ...Rules.type12.type1];
      if (diabetesTypeRes?.rules[2]?.fuzzy > 0)
        recommendList = [...recommendList, ...Rules.type12.type2];

      // older
      if (ageGroupRes?.rules[3]?.fuzzy > 0)
        recommendList = [...recommendList, ...Rules.type12.older];

      // female
      if (genderRes?.rules[1]?.fuzzy > 0)
        recommendList = [...recommendList, ...Rules.type12.female];
    }

    return { rules: recommendList };
  }
}
