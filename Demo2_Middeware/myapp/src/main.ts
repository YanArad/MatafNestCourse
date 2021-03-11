import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as cors from 'cors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Add the cors middleeatr to our server
  //Option 1
  app.use(cors())

  //Option2
  //app.enableCors();

  await app.listen(3000);
}
bootstrap();
