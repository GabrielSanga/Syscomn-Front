import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Alimentacao } from 'src/app/models/alimentacao';
import { AnimalChip } from 'src/app/models/animalChip';
import { AnimalChipService } from 'src/app/services/animal-chip.service';

@Component({
  selector: 'app-alimentacao-dialog',
  templateUrl: './alimentacao-dialog.component.html',
  styleUrls: ['./alimentacao-dialog.component.css']
})
export class AlimentacaoDialogComponent implements OnInit {

  ELEMENT_DATA: Alimentacao[] = []

  displayedColumns: string[] = ['data', 'quantidade', 'custo', 'racao', 'pessoa'];
  dataSource = new MatTableDataSource<Alimentacao>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input()
  idAnimalChip: number = 0;

  constructor(public dialogRef: MatDialogRef<AlimentacaoDialogComponent>,
              private aninalService: AnimalChipService,
              private toast: ToastrService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.aninalService.findById(this.idAnimalChip).subscribe(resposta => {
      this.ELEMENT_DATA = resposta.lstAlimentacao;
      this.dataSource = new MatTableDataSource<Alimentacao>(resposta.lstAlimentacao);
      this.dataSource.paginator = this.paginator;
    })
  }

  close(): void {
    this.dialogRef.close();
  }

}
