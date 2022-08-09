import {TestBed} from '@angular/core/testing';

import {HeroDetailGuardGuard} from './hero-detail-guard.guard';

describe('HeroDetailGuardGuard', () => {
  let guard: HeroDetailGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HeroDetailGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
