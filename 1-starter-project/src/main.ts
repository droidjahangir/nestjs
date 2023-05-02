import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //  global middleware
  // app.use(cors());
  await app.listen(3000);
}
bootstrap();
