import { TestBed } from '@angular/core/testing';

import { State.BaseService } from './state.base.service';

describe('State.BaseService', () => {
  let service: State.BaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(State.BaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
