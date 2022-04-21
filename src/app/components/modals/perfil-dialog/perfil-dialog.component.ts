import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil-dialog',
  templateUrl: './perfil-dialog.component.html',
  styleUrls: ['./perfil-dialog.component.css']
})
export class PerfilDialogComponent implements OnInit {

  usuario: Usuario = {
    idUsuario: 0,
    senhaAntiga: '',
    senha: '',
    senhaConfirmada: '',
    idUsuarioAlteracao: 0
  }

  @Input()
  idPessoa: number = 0;

  senha = new FormControl(null, Validators.minLength(5));
  senhaConfirmada = new FormControl(null, Validators.minLength(5));

  constructor(public dialogRef: MatDialogRef<PerfilDialogComponent>,
              private service: UsuarioService,
              private toast: ToastrService) { }

  ngOnInit(): void {this.usuario.idUsuarioAlteracao = this.idPessoa;}

  update(): void {
    if (this.validaSenhasIguais() && this.validaTamanhoSenha()){
      this.service.updatePassword(this.usuario).subscribe(() => {
        this.toast.success('Senha Alterada com sucesso!', 'Senha');
        this.close();
      }, ex => {
          this.toast.error("Senha Incorreta!");
      })
    }
  }

  validaSenhasIguais(): boolean{
    if (this.senha.value == this.senhaConfirmada.value){
      return true;
    }

    this.toast.error('Senhas informadas não estão iguais!', 'Senha');
    return false;
  }

  validaTamanhoSenha(): boolean{
    if (this.senha.valid && this.senhaConfirmada.valid){
      return true;
    }

    this.toast.error('Nova senha deve ter no mínimo 5 dígitos!', 'Senha');
    return false;
  }

  close(): void {
    this.dialogRef.close();
  }

}
