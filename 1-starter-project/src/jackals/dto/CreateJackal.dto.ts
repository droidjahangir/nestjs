import { IsString, IsInt } from 'class-validator';
import Joi from 'joi';

// export const createJackalSchema = Joi.object({
//   name: Joi.string().required(),
//   age: Joi.number().required(),
//   breed: Joi.string().required(),
// });

export class CreateJackalDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}
