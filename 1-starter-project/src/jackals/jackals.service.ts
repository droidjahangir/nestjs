import { Injectable } from '@nestjs/common';
import { Jackals } from './interface/jackal.interface';

@Injectable()
export class JackalsService {
  private readonly jackals: Jackals[] = [];

  private readonly cats: Jackals[] = [];

  create(cat: Jackals) {
    this.cats.push(cat);
  }

  findAll(): Jackals[] {
    return this.cats;
  }

  findOne(id: number): Jackals {
    return this.cats[0]
  }
}
