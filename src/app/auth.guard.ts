import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  if (localStorage.getItem('login') == '1')
    return true;
  else {
    router.navigateByUrl('login')
    return false
  }
};
