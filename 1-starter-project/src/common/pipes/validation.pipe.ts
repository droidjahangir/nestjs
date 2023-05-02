import { PipeTransform, Injectable } from '@nestjs/common';
import { ArgumentMetadata } from 'src/jackals/interface/argument.metadata.interface';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}
