import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { LoteProducao } from 'src/app/models/loteProducao';
import { LoteProducaoService } from 'src/app/services/lote-producao.service';

@Component({
  selector: 'app-estoque-producao',
  templateUrl: './estoque-producao.component.html',
  styleUrls: ['./estoque-producao.component.css']
})
export class EstoqueProducaoComponent implements OnInit {

  ELEMENT_DATA: Object[] = []

  displayedColumns: string[] = ['idRacao', 'descricao', 'dataFabricacao', 'dataValidade', 'saldo'];
  dataSource = new MatTableDataSource<Object>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: LoteProducaoService,
              private toast: ToastrService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 

  ngOnInit(): void {this.findAll(); }

  findAll(){
    this.service.findAllProducaoPorData().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Object>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  retornaDataFormata(data: Date): String{
    let dta = new Date(data)
  
    dta.setHours(24);
  
    return dta.toLocaleDateString("pt-br");
  }

}
