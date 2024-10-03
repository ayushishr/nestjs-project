/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // eslint-disable-next-line prettier/prettier
  await app.listen(3000);
}
// eslint-disable-next-line prettier/prettier
bootstrap();
