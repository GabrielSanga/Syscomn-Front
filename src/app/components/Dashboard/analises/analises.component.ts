import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { AnimalChipService } from 'src/app/services/animal-chip.service';
import { LoteService } from 'src/app/services/lote.service';

@Component({
  selector: 'app-analises',
  templateUrl: './analises.component.html',
  styleUrls: ['./analises.component.css']
})
export class AnalisesComponent implements OnInit {

  @ViewChild("cvMorteAnimais", {static: true}) elementoMorteAnimal: ElementRef

  @ViewChild("cvPesoLotes", {static: true}) elementoPesoLote: ElementRef
  @ViewChild("cvPesoAnimais", {static: true}) elementoPesoAnimal: ElementRef

  @ViewChild("cvVacinasAnimais", {static: true}) elementoVacinaAnimal: ElementRef
  @ViewChild("cvVacinasLote", {static: true}) elementoVacinaLote: ElementRef

  @ViewChild("cvAlimentoAnimais", {static: true}) elementoAlimentoAnimal: ElementRef
  @ViewChild("cvAlimentoLote", {static: true}) elementoAlimentoLote: ElementRef

  constructor(private serviceAnimal: AnimalChipService,
              private serviceLote: LoteService) { }

  mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',];

  ngOnInit(): void {
    this.DashBoardMorte();
    this.DashBoardPesoLote();
    this.DashBoardPesoAnimal();
    this.DashBoardVacinaAnimal();
    this.DashBoardVacinaLote();
    this.DashBoardAlimentoAnimal();
    this.DashBoardAlimentoLote();
  }

  DashBoardMorte(): void{
    const label = [];
    const dados = [];
    const dados2 = [];

    this.serviceAnimal.findAllQtdMortosMes().subscribe(resposta => {
      resposta.forEach(element => {
        //Carrega os Mêses
        label.push(this.mesesDoAno[element[1] - 1]);

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

    new Chart(this.elementoMorteAnimal.nativeElement, {
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

  DashBoardPesoLote(): void{
    const label = [];
    const dados = [];
    const dados2 = [];

    this.serviceLote.findAll().subscribe(lotes => {
      lotes.forEach(lote => {
        //Carrega o Lote
        label.push(lote.descricao);

        //Carrega o Peso do Lote
        dados.push(lote.pesoAtual);
        dados2.push(lote.qtdeCabecasAtual);
      });
    })

    const data = {
      labels: label,
      datasets: [{
        label: 'Peso dos Lotes',
        backgroundColor: '#3f51b5',
        borderColor: '#3f51b5',
        data: dados,    
      },
      {
        label: 'Quantidade dos Lotes',
        backgroundColor: 'green',
        borderColor: 'green',
        data: dados2,    
      },
    ]
    };

    new Chart(this.elementoPesoLote.nativeElement, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  DashBoardPesoAnimal(): void{
    let label = [];
    let data = [];
    let backgroundColor = [];

    this.serviceAnimal.findAll().subscribe(animais => {
      animais.forEach(animal => {
        label.push(animal.nome);

        //Carrega o Peso do Lote
        data.push(animal.pesoEntrada);
        backgroundColor.push(this.retornarBackgroundAleatorio())
      });
    })

    let dados = {
      datasets: [{
          data: data,
          backgroundColor: backgroundColor
      }],
      labels: label
    };

    new Chart(this.elementoPesoAnimal.nativeElement, {
      type: 'pie',
      data: dados
  });

  }

  DashBoardVacinaAnimal(): void{
    const label = [];
    const dados = [];
    let qtdDoses = 0;

    this.serviceAnimal.findAll().subscribe(animais => {
      animais.forEach(animal => {
        label.push(animal.nome);

        qtdDoses = 0;
        animal.lstVacinacao.forEach(vacinacao => {
          qtdDoses = vacinacao.quantidadeDose;
        })

        dados.push(qtdDoses);
      });
    })

    const data = {
      labels: label,
      datasets: [{
        label: 'Doses de Vacina',
        backgroundColor: '#3f51b5',
        borderColor: '#3f51b5',
        data: dados,    
      }]
    };

    new Chart(this.elementoVacinaAnimal.nativeElement, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  DashBoardVacinaLote(): void{
    const label = [];
    const dados = [];
    let qtdDoses = 0;

    this.serviceLote.findAll().subscribe(lotes => {
      lotes.forEach(lote => {
        label.push(lote.descricao);

        qtdDoses = 0;
        lote.lstAnimais.forEach(animal => {
          animal.lstVacinacao.forEach(vacinacao => {
            qtdDoses = vacinacao.quantidadeDose;
          })
        })

        dados.push(qtdDoses);
      });
    })

    const data = {
      labels: label,
      datasets: [{
        label: 'Doses de Vacina',
        backgroundColor: '#3f51b5',
        borderColor: '#3f51b5',
        data: dados,    
      }]
    };

    new Chart(this.elementoVacinaLote.nativeElement, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  DashBoardAlimentoAnimal(): void{
    const label = [];
    const dados = [];
    let quantidade = 0;

    this.serviceAnimal.findAll().subscribe(animais => {
      animais.forEach(animal => {
        label.push(animal.nome);

        quantidade = 0;
        animal.lstAlimentacao.forEach(alimentacao => {
          quantidade = alimentacao.quantidade;
        })

        dados.push(quantidade);
      });
    })

    const data = {
      labels: label,
      datasets: [{
        label: 'Quantidade de Ração',
        backgroundColor: '#3f51b5',
        borderColor: '#3f51b5',
        data: dados,    
      }]
    };

    new Chart(this.elementoAlimentoAnimal.nativeElement, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  DashBoardAlimentoLote(): void{
    const label = [];
    const dados = [];
    let quantidade = 0;

    this.serviceLote.findAll().subscribe(lotes => {
      lotes.forEach(lote => {
        label.push(lote.descricao);

        quantidade = 0;
        lote.lstAnimais.forEach(animal => {
          animal.lstAlimentacao.forEach(alimentacao => {
            quantidade = alimentacao.quantidade;
          })
        })

        dados.push(quantidade);
      });
    })

    const data = {
      labels: label,
      datasets: [{
        label: 'Quantidade de Ração',
        backgroundColor: '#3f51b5',
        borderColor: '#3f51b5',
        data: dados,    
      }]
    };

    new Chart(this.elementoAlimentoLote.nativeElement, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  addZeros(num, len): String{
    let numberWithZeroes = String(num);
    let counter = numberWithZeroes.length;
      
    while(counter < len) {
      numberWithZeroes = "0" + numberWithZeroes;   
      counter++;
    }
  
    return numberWithZeroes;
  }

  retornarBackgroundAleatorio(): String {
    return "rgb(" + Math.floor(Math.random() * 10) + "," + Math.floor(Math.random() * 80) + "," + Math.floor(Math.random() * 100) + ")"
  }

}
