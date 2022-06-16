import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Pesagem } from 'src/app/models/pesagem';
import { AnimalChipService } from 'src/app/services/animal-chip.service';

@Component({
  selector: 'app-pesagem-dialog',
  templateUrl: './pesagem-dialog.component.html',
  styleUrls: ['./pesagem-dialog.component.css']
})
export class PesagemDialogComponent implements OnInit {

  ELEMENT_DATA: Pesagem[] = []

  displayedColumns: string[] = ['data', 'peso', 'observacao', 'pessoa'];
  dataSource = new MatTableDataSource<Pesagem>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input()
  idAnimalChip: number = 0;

  constructor(public dialogRef: MatDialogRef<PesagemDialogComponent>,
              private aninalService: AnimalChipService,
              private toast: ToastrService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.aninalService.findById(this.idAnimalChip).subscribe(resposta => {
      this.ELEMENT_DATA = resposta.lstPesagem;
      this.dataSource = new MatTableDataSource<Pesagem>(resposta.lstPesagem);
      this.dataSource.paginator = this.paginator;
    })
  }

  close(): void {
    this.dialogRef.close();
  }

}
