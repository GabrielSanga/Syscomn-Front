import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MateriaPrima } from 'src/app/models/materiaprima';
import { MateriaprimaService } from 'src/app/services/materiaprima.service';

@Component({
  selector: 'app-materiaprima-list',
  templateUrl: './materiaprima-list.component.html',
  styleUrls: ['./materiaprima-list.component.css']
})
export class MateriaprimaListComponent implements OnInit {

  ELEMENT_DATA: MateriaPrima[] = []

  displayedColumns: string[] = ['idMateriaPrima', 'descricao', 'saldoEstoque', 'custoMateriaPrima', 'unidade', 'acoes'];
  dataSource = new MatTableDataSource<MateriaPrima>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: MateriaprimaService) { }

  ngOnInit(): void {this.findAll()}
 
  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<MateriaPrima>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
