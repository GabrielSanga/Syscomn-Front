import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Racao } from 'src/app/models/racao';
import { RacaoService } from 'src/app/services/racao.service';

@Component({
  selector: 'app-racao-list',
  templateUrl: './racao-list.component.html',
  styleUrls: ['./racao-list.component.css']
})
export class RacaoListComponent implements OnInit {

  ELEMENT_DATA: Racao[] = []

  displayedColumns: string[] = ['idRacao', 'descricao', 'diasValidade', 'formula', 'acoes'];
  dataSource = new MatTableDataSource<Racao>(this.ELEMENT_DATA);

  constructor(private service: RacaoService,
              private toast: ToastrService) { }

  ngOnInit(): void {
    this.findAll();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Racao>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  delete(idRacao: any): void{
    if(confirm("Deseja Realmente Deletar a Ração?")){
      this.deletarRacao(idRacao);
    }  
  }

  deletarRacao(idRacao) {
    this.service.delete(idRacao).subscribe(() => {
      this.toast.success('Ração Deletada com sucesso', 'Delete');
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

}
