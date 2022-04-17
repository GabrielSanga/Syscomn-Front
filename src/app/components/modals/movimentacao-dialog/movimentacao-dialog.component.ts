import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Movimentacao } from 'src/app/models/movimentacao';
import { LoteService } from 'src/app/services/lote.service';

@Component({
  selector: 'app-movimentacao-dialog',
  templateUrl: './movimentacao-dialog.component.html',
  styleUrls: ['./movimentacao-dialog.component.css']
})
export class MovimentacaoDialogComponent implements OnInit {

  ELEMENT_DATA: Movimentacao[] = []
  FILTERED_DATA: Movimentacao[] = []

  displayedColumns: string[] = ['dataHoraMovimentacao', 'situacao', 'idLote', 'descrLote', 'idCurralPiquete','descrCurralPiquete'];
  dataSource = new MatTableDataSource<Movimentacao>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input()
  idLote: number = 0;

  constructor(public dialogRef: MatDialogRef<MovimentacaoDialogComponent>,
    private loteService: LoteService,
    private toast: ToastrService,
    public dialog: MatDialog) { }

    ngOnInit(): void {
      this.findAll();
    }
  
    findAll(): void {
      this.loteService.findById(this.idLote).subscribe(resposta => {
        console.log(resposta.lstMovimentacao);
        this.ELEMENT_DATA = resposta.lstMovimentacao;
        this.dataSource = new MatTableDataSource<Movimentacao>(resposta.lstMovimentacao);
        this.dataSource.paginator = this.paginator;
      })
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
    close(): void {
      this.dialogRef.close();
    }

  }
