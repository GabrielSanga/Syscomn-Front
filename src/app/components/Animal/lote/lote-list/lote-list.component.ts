import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Lote } from 'src/app/models/lote';
import { LoteService } from 'src/app/services/lote.service';
import { MovimentacaoDialogComponent } from '../../../Modals/movimentacao-dialog/movimentacao-dialog.component';

@Component({
  selector: 'app-lote-list',
  templateUrl: './lote-list.component.html',
  styleUrls: ['./lote-list.component.css']
})
export class LoteListComponent implements OnInit {

  ELEMENT_DATA: Lote[] = []
  FILTERED_DATA: Lote[] = []

  displayedColumns: string[] = ['idLote', 'descricao', 'nroLote', 'pesoEntrada', 'pesoAtual', 'status', 'descricaoCurralPiquete', 'descricaoRegimeEngorda', 'movimentacao','acoes'];
  dataSource = new MatTableDataSource<Lote>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private Loteservice: LoteService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.Loteservice.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Lote>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openMovimentacao(idLote: number): void{
    const dialogRef = this.dialog.open(MovimentacaoDialogComponent, {
      height: '80%',
      width: '100%',
    });

    dialogRef.componentInstance.idLote = idLote;

    dialogRef.afterClosed();
  }

}