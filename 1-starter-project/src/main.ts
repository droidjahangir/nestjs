import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //  global middleware
  // app.use(cors());

  // we can use exception filter as global label
  // app.useGlobalFilters(new HttpExceptionFilter());

  // catch all excrption
  // const { httpAdapter } = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  // use global pipe
  // app.useGlobalPipes(new ValidationPipe());

  // use global guard
  // app.useGlobalGuards(new RolesGuard());

  await app.listen(3000);
}
bootstrap();
