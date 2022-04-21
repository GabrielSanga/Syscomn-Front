import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Fornecedor } from 'src/app/models/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-fornecedor-list',
  templateUrl: './fornecedor-list.component.html',
  styleUrls: ['./fornecedor-list.component.css']
})
export class FornecedorListComponent implements OnInit {

  ELEMENT_DATA: Fornecedor[] = []

  displayedColumns: string[] = ['idPessoa', 'nomePessoa', 'razaoSocial', 'descricaoTipoFornecedor', 'cpfCnpjPessoa', 'status', 'acoes'];

  dataSource = new MatTableDataSource<Fornecedor>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: FornecedorService,
              private toast: ToastrService) {}

  ngOnInit(): void {this.findAll()}

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Fornecedor>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(idFornecedor: any): void{
    if(confirm("Deseja Realmente Deletar o Fornecedor")){
      this.deletarFornecedor(idFornecedor);
    }  
  }

  deletarFornecedor(idFornecedor) {
    this.service.delete(idFornecedor).subscribe(() => {
      this.toast.success('Fornecedor Deletado com sucesso', 'Delete');
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
