import Joi from 'joi';

export const createJackalSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  breed: Joi.string().required(),
});

export class CreateJackalDto {
  name: string;
  age: number;
  breed: string;
}
