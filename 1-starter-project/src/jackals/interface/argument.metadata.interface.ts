import { Type } from "@nestjs/common/interfaces";

export interface ArgumentMetadata {
    type: 'body' | 'query' | 'param' | 'custom';
    metatype?: Type<unknown>;
    data?: string;
  }