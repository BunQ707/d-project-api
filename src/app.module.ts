import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { NutritionModule } from './modules/nutrition/nutrition.module';
import { envConfig } from './configs/env.config';

const { MONGODB_URI } = envConfig;
@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_URI),
    AuthModule,
    UserModule,
    NutritionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
