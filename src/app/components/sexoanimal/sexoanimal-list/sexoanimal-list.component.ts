import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SexoAnimal } from 'src/app/models/sexoanimal';
import { SexoanimalService } from 'src/app/services/sexoanimal.service';

@Component({
  selector: 'app-sexoanimal-list',
  templateUrl: './sexoanimal-list.component.html',
  styleUrls: ['./sexoanimal-list.component.css']
})
export class SexoanimalListComponent implements OnInit {

  ELEMENT_DATA: SexoAnimal[] = []

  displayedColumns: string[] = ['idSexoAnimal', 'descricao','acoes'];
  dataSource = new MatTableDataSource<SexoAnimal>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: SexoanimalService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<SexoAnimal>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
