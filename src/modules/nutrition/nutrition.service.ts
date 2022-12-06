import { Injectable } from '@nestjs/common';
import Decimal from 'decimal.js';
import { calculateBMI } from 'src/shared/helper';
import { NutritionDto } from './nutrition.dto';
import { Name } from './common';
import { think } from './rules';

import Plans from './plans';

const Logic = require('es6-fuzz/lib/logic');
const Trapezoid = require('es6-fuzz/lib/curve/trapezoid');
const Grade = require('es6-fuzz/lib/curve/grade');
const ReverseGrade = require('es6-fuzz/lib/curve/reverse-grade');
const Triangle = require('es6-fuzz/lib/curve/triangle');

type FRule = {
  output: Name;
  fuzzy: number;
};

type FRes = {
  fuzzified: number;
  defuzzified: Name;
  rules: FRule[];
};

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
    const ageGroupRes: FRes = ageGroupLogic.defuzzify(input.Age || 0);
    // const activityFactorRes = activityFactorLogic.defuzzify(
    //   input.ActivityFactor || 0,
    // );
    const bmiRes: FRes = bmiLogic.defuzzify(BMI || 0);
    if (bmiRes) {
    }

    // let recommendList = [];

    // if (diabetesTypeRes?.rules[0]?.fuzzy > 0) recommendList = [...Rules.type0];
    // else if (
    //   diabetesTypeRes?.rules[1]?.fuzzy > 0 ||
    //   diabetesTypeRes?.rules[2]?.fuzzy > 0
    // ) {
    //   // general
    //   recommendList = [...recommendList, ...Rules.type12.general];

    //   //  type 1 and 2
    //   if (diabetesTypeRes?.rules[1]?.fuzzy > 0)
    //     recommendList = [...recommendList, ...Rules.type12.type1];
    //   if (diabetesTypeRes?.rules[2]?.fuzzy > 0)
    //     recommendList = [...recommendList, ...Rules.type12.type2];

    //   // older
    //   if (ageGroupRes?.rules[3]?.fuzzy > 0)
    //     recommendList = [...recommendList, ...Rules.type12.older];

    //   // female
    //   if (genderRes?.rules[1]?.fuzzy > 0)
    //     recommendList = [...recommendList, ...Rules.type12.female];
    // }

    // return { rules: recommendList };

    // dò các luật mờ cần duyệt và giá trị mờ cho luật đó
    let fusedArray = [];
    for (let ageRule of ageGroupRes.rules) {
      if (new Decimal(ageRule.fuzzy).greaterThan(0)) {
        for (let bmiRule of bmiRes.rules) {
          if (new Decimal(bmiRule.fuzzy).greaterThan(0)) {
            fusedArray.push({
              bmiSet: bmiRule.output,
              ageSet: ageRule.output,
              minFuzzy: Decimal.min(
                new Decimal(ageRule.fuzzy),
                new Decimal(bmiRule.fuzzy),
              ),
            });
          }
        }
      }
    }

    let plan1Arr = [];
    let plan2Arr = [];
    let plan3Arr = [];

    // Duyệt các luật mờ để lấy giá trị Plan, gán với giá trị mờ trước đó
    fusedArray.forEach(
      (fa: { bmiSet: Name; ageSet: Name; minFuzzy: Decimal }) => {
        const thinkRes = think(
          fa.ageSet,
          fa.bmiSet,
          diabetesTypeRes.defuzzified,
          genderRes.defuzzified,
        );
        if (thinkRes === 1) plan1Arr.push(fa.minFuzzy);
        if (thinkRes === 2) plan2Arr.push(fa.minFuzzy);
        if (thinkRes === 3) plan3Arr.push(fa.minFuzzy);
      },
    );

    // Duyệt lại các Plan, lấy giá trị mờ lớn nhất
    let plan1Value: Decimal =
      plan1Arr.length > 0
        ? plan1Arr.reduce((a, b) => {
            return Decimal.max(a, b);
          })
        : new Decimal(0);
    let plan2Value: Decimal =
      plan2Arr.length > 0
        ? plan2Arr.reduce((a, b) => {
            return Decimal.max(a, b);
          })
        : new Decimal(0);
    let plan3Value: Decimal =
      plan3Arr.length > 0
        ? plan3Arr.reduce((a, b) => {
            return Decimal.max(a, b);
          })
        : new Decimal(0);

    // Khử mờ
    const result = new Decimal(
      plan1Value
        .plus(plan2Value.mul(2))
        .plus(plan3Value.mul(3))
        .div(plan1Value.plus(plan2Value).plus(plan3Value)),
    );

    let recommendList = [];

    if (result.greaterThan(0) && result.lessThanOrEqualTo(1))
      recommendList = Plans.Plan1;
    else if (result.greaterThan(1) && result.lessThan(2))
      recommendList = [...Plans.Plan1, ...Plans.Plan2];
    else if (result.equals(2)) recommendList = Plans.Plan2;
    else if (result.greaterThan(2) && result.lessThan(3))
      recommendList = [...Plans.Plan2, ...Plans.Plan3];
    else if (result.equals(3)) recommendList = Plans.Plan3;
    else if (result.greaterThan(3) && result.lessThan(4))
      recommendList = Plans.Plan3;
    else recommendList = [];

    return { rules: recommendList };
  }
}
