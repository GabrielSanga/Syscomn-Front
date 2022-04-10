import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { PerfilDialogComponent } from '../../modals/perfil-dialog/perfil-dialog.component';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent implements OnInit {

  funcionario: Funcionario = {
    idPessoa: '',
    nomePessoa: '',
    cpfCnpjPessoa: '',
    telefonePessoa: '',
    emailPessoa: '',
    dtaNascimentoPessoa: null,
    enderecoPessoa: '',
    statusPessoa: 'A',
    rgPessoa: '',
    observacaoPessoa: '',
    userName: '',
    senha: '',
    tipoPessoa: '',
    fotoPessoa: null,
    dtaAdmissao: null,
    dtaDemissao: null,
    NIS: '',
    status: 'A'
  }

  constructor(private service: FuncionarioService,
              private route: ActivatedRoute,
              private toast: ToastrService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.funcionario.idPessoa = this.route.snapshot.paramMap.get('idPessoa');
    this.findById();
  }

  update(): void {
    this.service.update(this.funcionario).subscribe(() => {
        this.toast.success('Funcionário Atualizado com Sucesso', 'Update');
        this.router.navigate(['funcionario'])
      }, ex => {
        if(ex.error.lstErrors) {
          ex.error.lstErrors.forEach(element => {
            this.toast.error(element.message);       
          });
        } else {
          this.toast.error(ex.error.message);   
        }
    })   
  }

  findById(): void{
    this.service.findById(this.funcionario.idPessoa).subscribe(resposta => { this.funcionario = resposta; console.log(this.funcionario);})
  }

  retornaTipoPessoa(tipoPessoa: any): string {
    if(tipoPessoa == 0) {
      return 'Física'
    } else if(tipoPessoa == 1) {
      return 'Jurídica'
    } else {
      return ''
    }
  }

  openAlterarSenha(idPessoa: any): void{
    const dialogRef = this.dialog.open(PerfilDialogComponent, {
      height: '350px',
      width: '600px',
    });

    dialogRef.afterClosed();
  }

}
