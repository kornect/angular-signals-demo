import { TestBed } from '@angular/core/testing';

import { BasicSignalsExtendedService } from './basic-signals-extended.service';

describe('BasicSignalsExtendedService', () => {
  let service: BasicSignalsExtendedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicSignalsExtendedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
