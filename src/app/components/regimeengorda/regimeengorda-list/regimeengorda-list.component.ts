import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RegimeEngorda } from 'src/app/models/regimeengorda';
import { RegimeengordaService } from 'src/app/services/regimeengorda.service';

@Component({
  selector: 'app-regimeengorda-list',
  templateUrl: './regimeengorda-list.component.html',
  styleUrls: ['./regimeengorda-list.component.css']
})
export class RegimeengordaListComponent implements OnInit {

  ELEMENT_DATA: RegimeEngorda[] = []

  displayedColumns: string[] = ['idRegimeEngorda', 'descricao', 'acoes'];
  dataSource = new MatTableDataSource<RegimeEngorda>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: RegimeengordaService
  ) { }

  ngOnInit(): void {
    this.finAll();
  }

  finAll(){
    this.service.findAll().subscribe(reposta => {
      this.ELEMENT_DATA = reposta
      this.dataSource = new MatTableDataSource<RegimeEngorda>(reposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
