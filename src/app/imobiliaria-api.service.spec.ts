import { TestBed } from '@angular/core/testing';

import { ImobiliariaApiService } from './imobiliaria-api.service';

describe('ImobiliariaApiService', () => {
  let service: ImobiliariaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImobiliariaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
