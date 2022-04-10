import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  //Método interceta todas as requisições para o backend e adiciona o token no cabeçalho da requisição
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');

    if(token){
      //Clona a requisção adicionando um novo parâmetro dentro do cabaçalho
      const cloneRequisicao = request.clone({headers: request.headers.set('Authorization', `Bearer ${token}`)})
      return next.handle(cloneRequisicao);
    }else{
      return next.handle(request);
    }
  }
}

//Variável utilizada no app.modulo para definir essa classe como interceptadora
export const AuthInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
]