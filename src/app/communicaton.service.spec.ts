import { TestBed } from '@angular/core/testing';

import { CommunicatonService } from './communicaton.service';

describe('CommunicatonService', () => {
  let service: CommunicatonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicatonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
