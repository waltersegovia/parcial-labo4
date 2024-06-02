import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { terminoscondicionGuard } from './terminoscondicion.guard';

describe('terminoscondicionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => terminoscondicionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
