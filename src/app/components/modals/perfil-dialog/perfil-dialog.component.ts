import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
  }

  constructor(public dialogRef: MatDialogRef<PerfilDialogComponent>,
              private service: UsuarioService) { }

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }




}
