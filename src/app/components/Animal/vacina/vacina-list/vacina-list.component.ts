import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Vacina } from 'src/app/models/vacina';
import { VacinaService } from 'src/app/services/vacina.service';

@Component({
  selector: 'app-vacina-list',
  templateUrl: './vacina-list.component.html',
  styleUrls: ['./vacina-list.component.css']
})
export class VacinaListComponent implements OnInit {

  ELEMENT_DATA: Vacina[] = []

  displayedColumns: string[] = ['idVacina', 'nomeVacina', 'fabricante', 'nomeFantasia', 'acoes'];
  dataSource = new MatTableDataSource<Vacina>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: VacinaService
  ) { }

  ngOnInit(): void {
    this.finAll();
  }

  finAll(){
    this.service.findAll().subscribe(reposta => {
      this.ELEMENT_DATA = reposta
      this.dataSource = new MatTableDataSource<Vacina>(reposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

