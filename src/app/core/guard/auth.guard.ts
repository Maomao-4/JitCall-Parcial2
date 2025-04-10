import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(AuthService);
  const isAuthenticated = authService.isAuthenticated();

  if (isAuthenticated) {
    return true;

  }else{
    router.navigate(['/login']);
    return false;
  }

  return true;
};
