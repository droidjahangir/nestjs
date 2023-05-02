import { Module } from '@nestjs/common';
import { JackalsController } from './jackals.controller';
import { JackalsService } from './jackals.service';

@Module({
  controllers: [JackalsController],
  providers: [JackalsService],
  exports: [JackalsService]
})
export class JackalsModule {}