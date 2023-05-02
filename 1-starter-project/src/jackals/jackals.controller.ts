import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
} from '@nestjs/common';
import { JackalsService } from './jackals.service';
import { CreateJackalDto, createJackalSchema } from './dto/CreateJackal.dto';
import { Jackals } from './interface/jackal.interface';
import { JoiValidationPipe } from 'src/common/pipes/joivalidation.pipe';

@Controller()
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

  @Get('schemaBasedValidation')
  async createJackal(@Body() createJackalDto: CreateJackalDto) {
    this.jackalsService.create(createJackalDto);
  }

  @Get('objectBasedValidation')
  @UsePipes(new JoiValidationPipe(createJackalSchema))
  async validateJackalObject(@Body() createCatDto: CreateJackalDto ) {
    this.jackalsService.create(createCatDto);
  }
}
