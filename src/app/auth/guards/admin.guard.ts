import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../users.service';

export const adminGuard: CanActivateFn = async (route, state) => {
  const userService = inject(UsersService);
  const router = inject(Router);

  if (!userService.isUserAuthenticated) {
    console.error("No hay usuario autenticado");
    //FIXME: Habría que mostrar una alerta onda "Tienes que loguearte como administrador...".
    userService.ultimaRuta = state.url;
    router.navigate(["auth/login"]);
    return false;
  }
  //Si llega acá ya está autenticado.
  if (!userService.isUserAdmin) {
    console.error(`El usuario ${userService.user?.username} no es administrador.`);
    //FIXME: Habría que mostrar una alerta onda "El usuario tal no es administrador...".
    router.navigate(["auth/login"]); //FIXME: Ver si es el mejor lugar para redireccionar
    return false;
  }
  return true;
};
