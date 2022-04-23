import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AnimalChip } from 'src/app/models/animalChip';
import { AnimalChipService } from 'src/app/services/animal-chip.service';

@Component({
  selector: 'app-animalchip-list',
  templateUrl: './animalchip-list.component.html',
  styleUrls: ['./animalchip-list.component.css']
})
export class AnimalchipListComponent implements OnInit {

  ELEMENT_DATA: AnimalChip[] = []

  displayedColumns: string[] = ['idAnimalChip', 'chip', 'codigo', 'dtaNascimento', 'sexo', 'raca', 'lote', 'acoes'];

  dataSource = new MatTableDataSource<AnimalChip>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: AnimalChipService,
              private toast: ToastrService) { }

  ngOnInit(): void {this.findAll()}

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<AnimalChip>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  retornaDataFormata(data: Date): String{
    let dta = new Date(data)
  
    dta.setHours(24);
  
    return dta.toLocaleDateString("pt-br");
  }

  delete(idAnimalChip: any): void{
    if(confirm("Deseja Realmente Deletar o Animal?")){
      this.deletarAnimal(idAnimalChip);
    }  
  }

  deletarAnimal(idAnimalChip: number) {
    this.service.delete(idAnimalChip).subscribe(() => {
      this.toast.success('Animal Deletado com sucesso', 'Delete');
      this.findAll();
    }, ex => {
      if(ex.error.lstErrors) {
        ex.error.lstErrors.forEach(element => {
          this.toast.error(element.message);       
        });
      } else {
        this.toast.error(ex.error.message);      
      }
    })   
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
