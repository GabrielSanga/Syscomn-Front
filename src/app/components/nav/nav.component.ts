import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

import { MENU } from './menu';
import { MenuItem } from './menu.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  options: FormGroup;

  usuario: Usuario = {
    idUsuario: 0,
    nomeUsuario: '',
    foto: ''
  }

  menuItems = [];
  constructor(private router: Router, private service: UsuarioService, private toast: ToastrService) {}

  ngOnInit(): void {
    this.menuItems = MENU;
    this.router.navigate(['home'])
    this.carregarUsuario()
  }

  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }

  uploadFoto(event: any, usuario: Usuario) {
    const files = event.target.files;
    //Caso selecionado uma imagem altera em tempo real no banco
    if (files.length) {
      const foto = files[0];
      const formData: FormData = new FormData();
      formData.append("foto", foto);
      this.service.upload(usuario, formData).subscribe(response => {
        this.carregarUsuario()
      });
    }
  }  

  carregarUsuario() {
    this.service.getUsuarioLogado(this.usuario).subscribe(resposta => {
      //Alimenta a model de usuário
      this.usuario = resposta
    })
  }

}


