import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Administrador } from 'src/app/models/administrador';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {

  ELEMENT_DATA: Administrador[] = []

  displayedColumns: string[] = ['idPessoa', 'nomePessoa', 'cpfCnpjPessoa', 'email', 'telefone', 'acoes'];

  dataSource = new MatTableDataSource<Administrador>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: AdministradorService,
              private toast: ToastrService) { }

  ngOnInit(): void {
    this.findAll();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Administrador>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

}
