import {
  MiddlewareConsumer,
  Module,
  NestModule,
  ValidationPipe,
} from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
import { JackalsModule } from './jackals/jackals.module';
import { RolesGuard } from './common/guards/roles.guard';
import { LoggingInterceptor } from './common/interceptor/logging.interceptor';

@Module({
  imports: [CatsModule, JackalsModule],

  // register custom filter exception to provider for dependancy injection
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    
    // custom token name for validationPipe provider
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },

    // custom guard token for this guard
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },

    // custom interceptor token
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    }
  ],
})
export class AppModule implements NestModule {
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
