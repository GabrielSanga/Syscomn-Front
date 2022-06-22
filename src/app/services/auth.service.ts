import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Credenciais } from '../models/credenciais';
import { Usuario } from '../models/usuario';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient,
              private serviceUsuario: UsuarioService) { }

  authenticate(creds: Credenciais) {
    return this.http.post(`${API_CONFIG.baseUrl}/login`, creds, { observe: 'response', responseType: 'text'})
  }

  successfulLogin(authToken: string) {
    //Armazena o Token
    localStorage.setItem('token', authToken);

    //Armazena as ROLES do usuário logado
    this.serviceUsuario.getRolesUsuario().subscribe(retorno => {
      localStorage.setItem('rolesUsuario', JSON.stringify(retorno));
    })
  }

  isAuthenticated() {
    //Pega o token do local storage
    let token = localStorage.getItem('token')

    if(token != null) {
      //Valida se o token está expirado -- OBS: Utiliza o service do angular
      return !this.jwtService.isTokenExpired(token)
    }
    return false
  }

  logout(){
    localStorage.clear();
  }

}
