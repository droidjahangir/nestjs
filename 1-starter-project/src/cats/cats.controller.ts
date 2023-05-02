import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  UseFilters,
} from '@nestjs/common';
import { Request } from 'express';

import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ForbiddenException } from 'src/common/exceptions/forbidden.exceptions';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';

@Controller('cats')

// we can use exception filter at controller label
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('customException')
  // @UseFilters(new HttpExceptionFilter())
  @UseFilters(HttpExceptionFilter)
  async findCats() {
    try {
      //   await this.catsService.findAll()
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }

    // custom message
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

    // common exception filter
    // throw new ForbiddenException();

    // All the built-in exceptions can also provide both an error cause and an error description using the options parameter:
    // throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })
  }
}

// @Controller({ host: 'admin.example.com' })
// export class AdminController {

// @Post()
// create(@Body() createCatDto: CreateCatDto): string {
//   console.log('createCatDto ===> ', createCatDto)
//   return 'This action adds a new cat';
// }

// @Get(':id')
// findById(@Param('id') id: string): string {
//   console.log('params ===> ', id);

//   return `This action returns a #${id} cat`;
// }

// @Get()
// findAll(@Req() request: Request): string {
//   return 'This action returns all cats';
// }

// @Get('ab*cd')
// wildcardRouter() {
//   return 'This route uses a wildcard';
// }

// @Get('statusCode')
// @HttpCode(204)
// gettingStatusCode() {
//   return 'This action adds a new cat';
// }

// @Get('cacheControl')
// @Header('Cache-Control', 'abc')
// cacheControl() {
//   return 'This action adds a new cat';
// }

// @Get('docs')
// @Redirect('https://docs.nestjs.com', 302)
// getDocs(@Query('version') version) {
//   if (version && version === '5') {
//     return { url: 'https://docs.nestjs.com/v5/' };
//   }

//   // return { url: 'https://docs.nestjs.com/v5/' };
// }

// @Get('promiseResponse')
// async getPromise(): Promise<any[]> {
//   return [];
// }

// @Get('observable')
// getPromiseAsObservable(): Observable<any[]> {
//   return of([]);
// }

//   @Get()
//   index(): string {
//     return 'Admin page';
//   }

// }
