import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Vacinacao } from 'src/app/models/vacinacao';
import { AnimalChipService } from 'src/app/services/animal-chip.service';

@Component({
  selector: 'app-vacinacao-dialog',
  templateUrl: './vacinacao-dialog.component.html',
  styleUrls: ['./vacinacao-dialog.component.css']
})
export class VacinacaoDialogComponent implements OnInit {

  ELEMENT_DATA: Vacinacao[] = []

  displayedColumns: string[] = ['data', 'lote', 'dose', 'custo', 'vacina', 'pessoa'];
  dataSource = new MatTableDataSource<Vacinacao>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input()
  idAnimalChip: number = 0;

  constructor(public dialogRef: MatDialogRef<VacinacaoDialogComponent>,
              private aninalService: AnimalChipService,
              private toast: ToastrService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.aninalService.findById(this.idAnimalChip).subscribe(resposta => {
      this.ELEMENT_DATA = resposta.lstVacinacao;
      this.dataSource = new MatTableDataSource<Vacinacao>(resposta.lstVacinacao);
      this.dataSource.paginator = this.paginator;
    })
  }

  close(): void {
    this.dialogRef.close();
  }

}
