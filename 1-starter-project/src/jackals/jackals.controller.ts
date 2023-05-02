import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import Joi from 'joi';

import { JackalsService } from './jackals.service';
import { CreateJackalDto } from './dto/CreateJackal.dto';
import { Jackals } from './interface/jackal.interface';
import { JoiValidationPipe } from 'src/common/pipes/joivalidation.pipe';

@Controller('jackals')
export class JackalsController {
  constructor(private jackalsService: JackalsService) {}

  @Post()
  async create(@Body() createCatDto: CreateJackalDto) {
    this.jackalsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Jackals[]> {
    return this.jackalsService.findAll();
  }

  //   pipe based validation
  @Get(':id')
  //   @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.jackalsService.findOne(id);
  }

  @Post('schemaBasedValidation')
  async createJackal(
    @Body(new ValidationPipe()) createJackalDto: CreateJackalDto,
  ) {
    return this.jackalsService.create(createJackalDto);
  }

  // @Post('objectBasedValidationJoi')
  // @UsePipes(new JoiValidationPipe(createJackalSchema))
  // async validateJackalObject(@Body() createCatDto: CreateJackalDto ) {
  //   this.jackalsService.create(createCatDto);
  // }
}
