// import { CanActivateFn } from '@angular/router';

// export const adminGuard: CanActivateFn = (route, state) => {
//   return true;
// };
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export  const adminGuard: CanActivateFn = async(route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)
  const rol =  await authService.rolUser();
  if (rol === 'admin') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

//continuar con el rol de admin probar con la pagina web