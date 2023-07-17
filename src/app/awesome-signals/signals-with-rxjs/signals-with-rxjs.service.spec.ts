import { TestBed } from '@angular/core/testing';

import { SignalsWithRxjsService } from './signals-with-rxjs.service';

describe('SignalsWithRxjsService', () => {
  let service: SignalsWithRxjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalsWithRxjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
