import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
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
