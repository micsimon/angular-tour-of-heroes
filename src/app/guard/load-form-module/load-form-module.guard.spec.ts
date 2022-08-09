import {TestBed} from '@angular/core/testing';

import {LoadFormModuleGuard} from './load-form-module.guard';

describe('LoadFormModuleGuard', () => {
  let guard: LoadFormModuleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoadFormModuleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
