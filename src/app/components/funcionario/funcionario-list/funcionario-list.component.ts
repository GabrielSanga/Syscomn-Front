import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {

  ELEMENT_DATA: Funcionario[] = []

  displayedColumns: string[] = ['idPessoa', 'nomePessoa', 'cpfCnpjPessoa', 'status', 'acoes'];

  dataSource = new MatTableDataSource<Funcionario>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: FuncionarioService,
              private toast: ToastrService) {}

  ngOnInit(): void {this.findAll()}

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Funcionario>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(idFuncionario: any): void{
    if(confirm("Deseja Realmente Deletar o Funcionário?")){
      this.deletarFornecedor(idFuncionario);
    }  
  }

  deletarFornecedor(idFuncionario) {
    this.service.delete(idFuncionario).subscribe(() => {
      this.toast.success('Funcionário Deletado com sucesso', 'Delete');
      this.findAll();
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

  retornaTipoPessoa(tipoPessoa: any): string {
    if(tipoPessoa == 0) {
      return 'Física'
    } else if(tipoPessoa == 1) {
      return 'Jurídica'
    } else {
      return ''
    }
  }

}
