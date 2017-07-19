import { Injectable } from '@angular/core';

@Injectable()
export class VatService {

  constructor() { }

  calculate(value: number, vat: number) {
    return value + value * (vat / 100);
  }
}
