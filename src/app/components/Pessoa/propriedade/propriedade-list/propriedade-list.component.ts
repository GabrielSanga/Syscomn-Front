import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Propriedade } from 'src/app/models/propriedade';
import { PropriedadeService } from 'src/app/services/propriedade.service';

@Component({
  selector: 'app-propriedade-list',
  templateUrl: './propriedade-list.component.html',
  styleUrls: ['./propriedade-list.component.css']
})

export class PropriedadeListComponent implements OnInit {
  ELEMENT_DATA: Propriedade[] = [
    
  ]

  displayedColumns: string[] = ['idPropriedade', 'nomePropriedade', 'endereco', 'cnpj', 'status','acoes'];
  dataSource = new MatTableDataSource<Propriedade>(this.ELEMENT_DATA);

  constructor(
    private service: PropriedadeService
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
      this.dataSource = new MatTableDataSource<Propriedade>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

