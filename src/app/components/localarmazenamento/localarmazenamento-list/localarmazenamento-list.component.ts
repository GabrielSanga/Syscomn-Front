import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LocalArmazenamento } from 'src/app/models/localarmazenamento';

import { LocalarmazenamentoService } from 'src/app/services/localarmazenamento.service';

@Component({
  selector: 'app-localarmazenamento-list',
  templateUrl: './localarmazenamento-list.component.html',
  styleUrls: ['./localarmazenamento-list.component.css']
})
export class LocalarmazenamentoListComponent implements OnInit {

  ELEMENT_DATA: LocalArmazenamento[] = [  
  ]

  displayedColumns: string[] = ['idLocalArmazenamento', 'descricao','acoes'];
  dataSource = new MatTableDataSource<LocalArmazenamento>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: LocalarmazenamentoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<LocalArmazenamento>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

