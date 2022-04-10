import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TipoFornecedor } from 'src/app/models/tipofornecedor';
import { TipofornecedorService } from 'src/app/services/tipofornecedor.service';

@Component({
  selector: 'app-tipofornecedor-list',
  templateUrl: './tipofornecedor-list.component.html',
  styleUrls: ['./tipofornecedor-list.component.css']
})
export class TipofornecedorListComponent implements OnInit {

  ELEMENT_DATA: TipoFornecedor[] = []

  displayedColumns: string[] = ['idTipoFornecedor', 'descricao', 'acoes'];
  dataSource = new MatTableDataSource<TipoFornecedor>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: TipofornecedorService
  ) { }

  ngOnInit(): void {
    this.finAll();
  }

  finAll(){
    this.service.findAll().subscribe(reposta => {
      this.ELEMENT_DATA = reposta
      this.dataSource = new MatTableDataSource<TipoFornecedor>(reposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
