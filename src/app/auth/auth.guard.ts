import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { observable, Observable, Subscriber } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { VerificarPermissoes } from './VerificarPermissoes';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router,
              private toast: ToastrService) {}

  //Todo direcionamento para um rota é acionado essa funcão, que verifica se existe token e se o mesmo não está expirado
  //Caso Não Expirado permite o acesso a rota
  //Caso Expirado retorna para a rota de login
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let authenticated = this.authService.isAuthenticated();

    if(authenticated) {
      //Verifica permissão da rota
      if(this.checarRota(route)){
        return true;
      }else{
        this.toast.error("Usuário não possui permissão para utilizar essa aplicação!");
        return false;
      }   
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  protected checarRota(activated: ActivatedRouteSnapshot): boolean{
    //Verifica se existe permissões para acessar essa rota
    if(typeof activated.data['roles'] !== 'undefined' && activated.data['roles'].length){
      const rolesRota = activated.data['roles'];
      const roles = JSON.parse(localStorage.getItem("rolesUsuario"));

      return VerificarPermissoes.temPermissao(rolesRota, roles);    
    }
    //Caso não exista permissões permite o acesso diretamente
    return true;
  }
  
}
