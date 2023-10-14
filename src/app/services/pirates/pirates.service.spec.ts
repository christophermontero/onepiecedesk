import { TestBed } from '@angular/core/testing';

import { PiratesService } from './pirates.service';

describe('PiratesService', () => {
  let service: PiratesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiratesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
