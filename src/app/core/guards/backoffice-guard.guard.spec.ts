import { TestBed } from '@angular/core/testing';

import { BackofficeGuardGuard } from './backoffice-guard.guard';

describe('BackofficeGuardGuard', () => {
  let guard: BackofficeGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BackofficeGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
