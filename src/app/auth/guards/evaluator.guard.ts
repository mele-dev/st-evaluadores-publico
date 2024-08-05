import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../users.service';

export const evaluatorGuard: CanActivateFn = async (route, state) => {
  const userService = inject(UsersService);
  const router = inject(Router);

  if (!userService.isUserAuthenticated) {
    //FIXME: Habría que mostrar una alerta onda "Tienes que loguearte...".
    userService.ultimaRuta = state.url;
    router.navigate(["auth/login"]);
    return false;
  }
  return true;
};
