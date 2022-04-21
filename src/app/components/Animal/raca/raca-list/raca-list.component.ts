import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Raca } from 'src/app/models/raca';
import { RacaService } from 'src/app/services/raca.service';

@Component({
  selector: 'app-raca-list',
  templateUrl: './raca-list.component.html',
  styleUrls: ['./raca-list.component.css']
})
export class RacaListComponent implements OnInit {

  ELEMENT_DATA: Raca[] = []

  displayedColumns: string[] = ['idRaca', 'descricao', 'acoes'];
  dataSource = new MatTableDataSource<Raca>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: RacaService
  ) { }

  ngOnInit(): void {
    this.finAll();
  }

  finAll(){
    this.service.findAll().subscribe(reposta => {
      this.ELEMENT_DATA = reposta
      this.dataSource = new MatTableDataSource<Raca>(reposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
