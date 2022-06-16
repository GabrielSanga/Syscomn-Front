import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { AnimalChipService } from 'src/app/services/animal-chip.service';

@Component({
  selector: 'app-analises',
  templateUrl: './analises.component.html',
  styleUrls: ['./analises.component.css']
})
export class AnalisesComponent implements OnInit {

  @ViewChild("cvMorteAnimais", {static: true}) elementoMorteAnimais: ElementRef

  constructor(private serviceAnimal: AnimalChipService) { }

   mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',];

  ngOnInit(): void {
    this.DashBoardMorte();
  }

  DashBoardMorte(): void{
    const label = [];
    const dados = [];

    this.serviceAnimal.findAllQtdMortosMes().subscribe(resposta => {
      resposta.forEach(element => {
        //Carrega os Mêses
        label.push(this.mesesDoAno[element[1]]);

        //Carrega as Quantidades
        dados.push(element[0]);
      });
    })

    const data = {
      labels: label,
      datasets: [{
        label: 'Morte de Animais',
        backgroundColor: '#3f51b5',
        borderColor: '#3f51b5',
        data: dados,    
      }]
    };

    new Chart(this.elementoMorteAnimais.nativeElement, {
      type: 'line',
      data: data,
      options: {
        scales: {
          y: {
            suggestedMax: 8,
            min: 0
          },
        }
      }
    });
  }

}
