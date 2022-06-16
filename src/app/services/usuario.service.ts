import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarioLogado(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${API_CONFIG.baseUrl}/usuario`, usuario);
  }

  upload(usuario: Usuario, formData: FormData): Observable<any> {
    return this.http.put(`${API_CONFIG.baseUrl}/usuario/${usuario.idUsuario}/foto`, formData, { responseType: 'blob' });
  }

  updatePassword(usuario: Usuario): Observable<any> {
    return this.http.post<Usuario>(`${API_CONFIG.baseUrl}/usuario/password`, usuario);
  }

  getRolesUsuario(): Observable<String[]> {
    return this.http.get<String[]>(`${API_CONFIG.baseUrl}/usuario/rolesUsuario`);
  }

}

