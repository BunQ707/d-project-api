import { Name } from './common';

export const think = (
  AgeGroup: Name,
  BMI: Name,
  Diabetes: Name,
  Gender: Name,
) => {
  let Plan = 0;
  if (
    AgeGroup === Name.Children &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Risk &&
    Gender === Name.Male
  ) {
    Plan = 1;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Risk &&
    Gender === Name.Female
  ) {
    Plan = 1;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.Normal &&
    Diabetes === Name.Risk &&
    Gender === Name.Male
  ) {
    Plan = 1;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.Normal &&
    Diabetes === Name.Risk &&
    Gender === Name.Female
  ) {
    Plan = 1;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Risk &&
    Gender === Name.Male
  ) {
    Plan = 1;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Risk &&
    Gender === Name.Female
  ) {
    Plan = 1;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.Obese &&
    Diabetes === Name.Risk &&
    Gender === Name.Male
  ) {
    Plan = 1;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.Obese &&
    Diabetes === Name.Risk &&
    Gender === Name.Female
  ) {
    Plan = 1;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Risk &&
    Gender === Name.Male
  ) {
    Plan = 1;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Risk &&
    Gender === Name.Female
  ) {
    Plan = 1;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.Normal &&
    Diabetes === Name.Risk &&
    Gender === Name.Male
  ) {
    Plan = 1;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.Normal &&
    Diabetes === Name.Risk &&
    Gender === Name.Female
  ) {
    Plan = 1;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Risk &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Risk &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.Obese &&
    Diabetes === Name.Risk &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.Obese &&
    Diabetes === Name.Risk &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Risk &&
    Gender === Name.Male
  ) {
    Plan = 1;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Risk &&
    Gender === Name.Female
  ) {
    Plan = 1;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.Normal &&
    Diabetes === Name.Risk &&
    Gender === Name.Male
  ) {
    Plan = 1;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.Normal &&
    Diabetes === Name.Risk &&
    Gender === Name.Female
  ) {
    Plan = 1;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Risk &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Risk &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.Obese &&
    Diabetes === Name.Risk &&
    Gender === Name.Male
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.Obese &&
    Diabetes === Name.Risk &&
    Gender === Name.Female
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Risk &&
    Gender === Name.Male
  ) {
    Plan = 1;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Risk &&
    Gender === Name.Female
  ) {
    Plan = 1;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.Normal &&
    Diabetes === Name.Risk &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.Normal &&
    Diabetes === Name.Risk &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Risk &&
    Gender === Name.Male
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Risk &&
    Gender === Name.Female
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.Obese &&
    Diabetes === Name.Risk &&
    Gender === Name.Male
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.Obese &&
    Diabetes === Name.Risk &&
    Gender === Name.Female
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Type1 &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Type1 &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.Normal &&
    Diabetes === Name.Type1 &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.Normal &&
    Diabetes === Name.Type1 &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Type1 &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Type1 &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.Obese &&
    Diabetes === Name.Type1 &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.Obese &&
    Diabetes === Name.Type1 &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Type1 &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Type1 &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.Normal &&
    Diabetes === Name.Type1 &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.Normal &&
    Diabetes === Name.Type1 &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Type1 &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Type1 &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.Obese &&
    Diabetes === Name.Type1 &&
    Gender === Name.Male
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.Obese &&
    Diabetes === Name.Type1 &&
    Gender === Name.Female
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Type1 &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Type1 &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.Normal &&
    Diabetes === Name.Type1 &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.Normal &&
    Diabetes === Name.Type1 &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Type1 &&
    Gender === Name.Male
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Type1 &&
    Gender === Name.Female
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.Obese &&
    Diabetes === Name.Type1 &&
    Gender === Name.Male
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.Obese &&
    Diabetes === Name.Type1 &&
    Gender === Name.Female
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Type1 &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Type1 &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.Normal &&
    Diabetes === Name.Type1 &&
    Gender === Name.Male
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.Normal &&
    Diabetes === Name.Type1 &&
    Gender === Name.Female
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Type1 &&
    Gender === Name.Male
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Type1 &&
    Gender === Name.Female
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.Obese &&
    Diabetes === Name.Type1 &&
    Gender === Name.Male
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.Obese &&
    Diabetes === Name.Type1 &&
    Gender === Name.Female
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Type2 &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Type2 &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.Normal &&
    Diabetes === Name.Type2 &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.Normal &&
    Diabetes === Name.Type2 &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Type2 &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Type2 &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.Obese &&
    Diabetes === Name.Type2 &&
    Gender === Name.Male
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Children &&
    BMI === Name.Obese &&
    Diabetes === Name.Type2 &&
    Gender === Name.Female
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Type2 &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Type2 &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.Normal &&
    Diabetes === Name.Type2 &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.Normal &&
    Diabetes === Name.Type2 &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Type2 &&
    Gender === Name.Male
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Type2 &&
    Gender === Name.Female
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.Obese &&
    Diabetes === Name.Type2 &&
    Gender === Name.Male
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Adolescence &&
    BMI === Name.Obese &&
    Diabetes === Name.Type2 &&
    Gender === Name.Female
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Type2 &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Type2 &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.Normal &&
    Diabetes === Name.Type2 &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.Normal &&
    Diabetes === Name.Type2 &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Type2 &&
    Gender === Name.Male
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Type2 &&
    Gender === Name.Female
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.Obese &&
    Diabetes === Name.Type2 &&
    Gender === Name.Male
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Adult &&
    BMI === Name.Obese &&
    Diabetes === Name.Type2 &&
    Gender === Name.Female
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Type2 &&
    Gender === Name.Male
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.UnderWeight &&
    Diabetes === Name.Type2 &&
    Gender === Name.Female
  ) {
    Plan = 2;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.Normal &&
    Diabetes === Name.Type2 &&
    Gender === Name.Male
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.Normal &&
    Diabetes === Name.Type2 &&
    Gender === Name.Female
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Type2 &&
    Gender === Name.Male
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.OverWeight &&
    Diabetes === Name.Type2 &&
    Gender === Name.Female
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.Obese &&
    Diabetes === Name.Type2 &&
    Gender === Name.Male
  ) {
    Plan = 3;
  }

  if (
    AgeGroup === Name.Older &&
    BMI === Name.Obese &&
    Diabetes === Name.Type2 &&
    Gender === Name.Female
  ) {
    Plan = 3;
  }
  return Plan;
};
