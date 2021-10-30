import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EstadoAnimal } from 'src/app/models/estadoanimal';
import { EstadoanimalService } from 'src/app/services/estadoanimal.service';

@Component({
  selector: 'app-estadoanimal-list',
  templateUrl: './estadoanimal-list.component.html',
  styleUrls: ['./estadoanimal-list.component.css']
})
export class EstadoanimalListComponent implements OnInit {

  ELEMENT_DATA: EstadoAnimal[] = [
  ]

  displayedColumns: string[] = ['idEstadoAnimal', 'descricao', 'acoes'];
  dataSource = new MatTableDataSource<EstadoAnimal>(this.ELEMENT_DATA);

  constructor(
    private service: EstadoanimalService
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
      this.dataSource = new MatTableDataSource<EstadoAnimal>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
