// import { CanActivateFn } from '@angular/router';

// export const terminoscondicionGuard: CanActivateFn = (route, state) => {
//   return true;
// };
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const terminoscondicionGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const isAuthenticated = authService.isAuthenticated();
  if (isAuthenticated) {
    const user = authService.getUser();
    return user.acceptedTerms && user.email !== '';
  }
  return false;
};