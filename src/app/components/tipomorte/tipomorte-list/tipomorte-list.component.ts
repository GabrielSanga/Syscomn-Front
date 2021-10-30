import { Component, OnInit, TestabilityRegistry, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TipoMorte } from 'src/app/models/tipomorte';
import { TipomorteService } from 'src/app/services/tipomorte.service';

@Component({
  selector: 'app-tipomorte-list',
  templateUrl: './tipomorte-list.component.html',
  styleUrls: ['./tipomorte-list.component.css']
})
export class TipomorteListComponent implements OnInit {

  ELEMENT_DATA: TipoMorte[] = [
    
  ]

  displayedColumns: string[] = ['idTipoMorte', 'descricao', 'acoes'];
  dataSource = new MatTableDataSource<TipoMorte>(this.ELEMENT_DATA);

  constructor(
    private service: TipomorteService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<TipoMorte>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

