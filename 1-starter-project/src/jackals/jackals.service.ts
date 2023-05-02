import { Injectable } from '@nestjs/common';
import { Jackals } from './interface/jackal.interface';

@Injectable()
export class JackalsService {
  private readonly jackals: Jackals[] = [];

  create(jackal: Jackals) {
    this.jackals.push(jackal);
  }

  findAll(): Jackals[] {
    return this.jackals;
  }

  findOne(id: number): Jackals {
    return this.jackals[0]
  }
}
