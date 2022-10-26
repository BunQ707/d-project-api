import { Body, Controller, Post } from '@nestjs/common';
import { NutritionDto } from './nutrition.dto';
import { NutritionService } from './nutrition.service';

@Controller()
export class NutritionController {
  constructor(private nutritionService: NutritionService) {}

  @Post('recommendNutriPlan')
  async recommendNutriPlan(@Body() input: NutritionDto) {
    return this.nutritionService.recommendNutriPlan(input);
  }
}
