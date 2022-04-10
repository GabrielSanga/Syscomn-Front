import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  //Todo direcionamento para um rota é acionado essa funcão, que verifica se existe token e se o mesmo não está expirado
  //Caso Não Expirado permite o acesso a rota
  //Caso Expirado retorna para a rota de login
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let authenticated = this.authService.isAuthenticated();

    if(authenticated) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false
    }
  }
  
}
