import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credenciais = {
    userName: '',
    senha: ''
  }

  senha = new FormControl(null, Validators.minLength(5));

  constructor(private toast: ToastrService, private service: AuthService, private router: Router) { }

  ngOnInit(): void {}

  validaCampos(): boolean {
    return this.senha.valid;
  }

  logar() {
    this.service.authenticate(this.creds).subscribe(resposta => {
      //Caso Autenticado com sucesso, guarda o token
      this.service.successfulLogin(resposta.headers.get('Authorization').substring(7));
      this.router.navigate(['']);
    }, () => {
      //Caso Não Autentica retorna mensagem de erro
      this.toast.error('Usuário e/ou senha inválidos', 'Login');
      this.creds.senha = ''})      
    }

  }
