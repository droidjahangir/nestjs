import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';

@Module({
  imports: [CatsModule],

  // register custom filter exception to provider for dependancy injection
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ]
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      // .apply(cors(), helmet(), logger)  // apply multiple middleware
      .apply(LoggerMiddleware)
      // .exclude(
      //   { path: 'cats', method: RequestMethod.GET },
      //   { path: 'cats', method: RequestMethod.POST },
      //   'cats/(.*)',
      // )
      .forRoutes('cats');
      // .forRoutes([CatsController, DogsController]);
      // .forRoutes({ path: 'cats', method: RequestMethod.GET })


    // implement functional middleware
    // consumer
    // .apply(logger)
    // .forRoutes(CatsController);
  }

}
