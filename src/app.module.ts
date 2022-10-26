import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { NutritionModule } from './modules/nutrition/nutrition.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/d-project'),
    AuthModule,
    UserModule,
    NutritionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
