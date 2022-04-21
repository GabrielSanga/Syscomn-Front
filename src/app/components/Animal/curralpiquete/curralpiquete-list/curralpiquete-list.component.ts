import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CurralPiquete } from 'src/app/models/curralpiquete';
import { CurralpiqueteService } from 'src/app/services/curralpiquete.service';

@Component({
  selector: 'app-curralpiquete-list',
  templateUrl: './curralpiquete-list.component.html',
  styleUrls: ['./curralpiquete-list.component.css']
})
export class CurralpiqueteListComponent implements OnInit {

  ELEMENT_DATA: CurralPiquete[] = []
  FILTERED_DATA: CurralPiquete[] = []

  displayedColumns: string[] = ['idCurralPiquete', 'descricao', 'areaPasto', 'quantidadeCabecas', 'nomePropriedade', 'statusCurralPiquete', 'tipoCurralPiquete', 'acoes'];
  dataSource = new MatTableDataSource<CurralPiquete>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private service: CurralpiqueteService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<CurralPiquete>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
