import { TestBed, inject } from '@angular/core/testing';

import { VatService } from './vat.service';

describe('VatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VatService]
    });
  });

  it('should be created', inject([VatService], (service: VatService) => {
    expect(service).toBeTruthy();
  }));
});
