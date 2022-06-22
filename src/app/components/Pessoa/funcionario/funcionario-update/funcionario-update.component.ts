import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PerfilDialogComponent } from 'src/app/components/Modals/perfil-dialog/perfil-dialog.component';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent implements OnInit {

  public PerfilADMIN: any = 1;
  public PerfilFuncionario: any = 2;

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

  public checkADMIN = false;
  public checkFUNC = false;

  constructor(private service: FuncionarioService,
              private route: ActivatedRoute,
              private toast: ToastrService,
              private router: Router,
              public dialog: MatDialog,
              ) { }

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
    this.service.findById(this.funcionario.idPessoa).subscribe(resposta => {
      
      resposta.perfis.forEach(element => {
        if(Number.parseInt(element) === 1){
          this.checkADMIN = true;
        }else if(Number.parseInt(element) === 2){
          this.checkFUNC = true;
        }
      });

       this.funcionario = resposta;
      })
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
      height: '300px',
      width: '600px',
    })

    dialogRef.componentInstance.idPessoa = this.funcionario.idPessoa;

    dialogRef.afterClosed();
  }

  addPerfil(perfil: any): void {
    if(this.funcionario.perfis.includes(perfil)) {
      //Caso retirado o perfil de Funcionario retira também o de ADMIN
      if(perfil == this.PerfilFuncionario){
        this.funcionario.perfis.splice(this.funcionario.perfis.indexOf(this.PerfilADMIN), 1);
        this.checkADMIN = false;
      }

      this.funcionario.perfis.splice(this.funcionario.perfis.indexOf(perfil), 1);
    } else {  
      //Caso adicionado o perfil de ADM adiciona também o de Funcionario
      if(perfil == this.PerfilADMIN){
        this.funcionario.perfis.push(this.PerfilFuncionario);
        this.checkFUNC = true;
      }

      this.funcionario.perfis.push(perfil);
    }
  }

}