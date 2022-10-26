import { BadRequestException, Injectable } from '@nestjs/common';
import { calculateBMI } from 'src/shared/helper';
import { NutritionDto } from './nutrition.dto';

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
  Prediabetes = 'Prediabetes',
  Children = 'Children',
  Adolescence = 'Adolescence',
  Adult = 'Adult',
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
      .init(Name.Male, new Trapezoid(0, 0, 0.5, 0.51))
      .or(Name.Female, new Trapezoid(0.5, 0.51, 1, 1));

    const diabetesTypeLogic = new Logic()
      .init(Name.Type1, new ReverseGrade(0, 0.5))
      .or(Name.Type2, new Triangle(0, 0.5, 1))
      .or(Name.Prediabetes, new Grade(0, 5, 1));

    const ageGroupLogic = new Logic()
      .init(Name.Children, new ReverseGrade(0, 15))
      .or(Name.Adolescence, new Triangle(0, 15, 30))
      .or(Name.Adult, new Trapezoid(15, 30, 55, 70))
      .or(Name.Obese, new Trapezoid(55, 70, 120, 120));

    const activityFactorLogic = new Logic()
      .init(Name.Sedentary, new Trapezoid(0, 0, 0.2, 0.3))
      .or(Name.Moderate, new Trapezoid(0.2, 0.3, 0.7, 0.8))
      .or(Name.Active, new Trapezoid(0.7, 0.8, 1, 1));

    const bmiLogic = new Logic()
      .init(Name.UnderWeight, new Trapezoid(0, 0, 16, 18))
      .or(Name.Normal, new Trapezoid(16, 18, 24, 26))
      .or(Name.OverWeight, new Trapezoid(24, 26, 29, 31))
      .or(Name.Obese, new Trapezoid(29, 31, 40, 40));

    const genderRes = genderLogic.defuzzify(input.Gender || 0);
    const diabetesTypeRes = diabetesTypeLogic.defuzzify(
      input.DiabetesType || 0,
    );
    const ageGroupRes = ageGroupLogic.defuzzify(input.Age || 0);
    const activityFactorRes = activityFactorLogic.defuzzify(
      input.ActivityFactor || 0,
    );
    const bmiRes = bmiLogic.defuzzify(BMI || 0);
    // let;

    // if ( (Gender is Male) and (Age is GP1) and (Diabeties is Type1) and (Activity is Sedentary) and (BMI-Interpretation is UnderWeight) )planRes=1;
    // if ( (Gender is Male) and (Age is GP1) and (Diabeties is Type1) and (Activity is Moderate) and (BM-Interpretation is UnderWeight) )planRes=1;
    // if ( (Gender is Male) and (Age is GP1) and (Diabeties is Type1) and (Activity is Active) and (BMI-Interpretation is UnderWeight) )planRes=1;
    // if ( (Gender is Female) and (Age is GP1) and (Diabeties is Type1) and (Activity is Sedentary) and (BMI-Interpretation is UnderWeight) )planRes=1;
    // if ( (Gender is Female) and (Age is GP1) and (Diabeties is Type1) and (Activity is Moderate) and (BMI-Interpretation is UnderWeight) )planRes=1;
    // if ( (Gender is Female) and (Age is GP1) and (Diabeties is Type1) and (Activity is Active) and (BMI-Interpretation is UnderWeight) )planRes=1;
    // if ( (Gender is Male) and (Age is GP3) and (Diabeties is Type2) and (Activity is Sedentary) and (BMI-Interpretation is Normal) )planRes=1;
    // if ( (Gender is Male) and (Age is GP3) and (Diabeties is Type2) and (Activity is Moderate) and (BMI-Interpretation is Normal) )planRes=1;
    // if ( (Gender is Male) and (Age is GP3) and (Diabeties is Type2) and (Activity is Active) and (BMI-Interpretation is Normal) )planRes=1;
    // if ( (Gender is Female) and (Age is GP3) and (Diabeties is Type2) and (Activity is Sedentary) and (BMI-Interpretation is Normal) )planRes=1;
    // if ( (Gender is Female) and (Age is GP3) and (Diabeties is Type2) and (Activity is Moderate) and (BMI-Interpretation is Normal) )planRes=1;
    // if ( (Gender is Female) and (Age is GP3) and (Diabeties is Type2) and (Activity is Active) and (BMI-Interpretation is Normal) )planRes=1;

    return ageGroupRes;
  }
}
