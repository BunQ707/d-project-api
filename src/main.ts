import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { envConfig } from './configs/env.config';

dotenv.config();

const { PORT } = envConfig;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const openApiConfig = new DocumentBuilder()
    .addBearerAuth({
      type: 'http',
      scheme: 'Bearer',
      bearerFormat: 'JWT',
      in: 'header',
    })
    .setTitle('D project api docs')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, openApiConfig);
  SwaggerModule.setup('/docs', app, document);
  // console.log('Starting at port: ', PORT);
  app.enableCors();
  await app.listen(process.env.PORT || PORT);
}
bootstrap();
