import { TestBed } from '@angular/core/testing';

import { LunariaService } from './lunaria.service';

describe('LunariaService', () => {
  let service: LunariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LunariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
