import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}


// All the built-in exceptions can also provide both an error cause and an error description using the options parameter:
// throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })
