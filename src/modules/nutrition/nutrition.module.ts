import { Module } from '@nestjs/common';
import { NutritionController } from './nutrition.controller';
// import { MongooseModule } from '@nestjs/mongoose';
import { NutritionService } from './nutrition.service';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [NutritionController],
  providers: [NutritionService],
  //   exports: [NutritionService],
})
export class NutritionModule {}
