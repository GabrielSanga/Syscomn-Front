import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrdemProducao } from 'src/app/models/ordemProducao';
import { Racao } from 'src/app/models/racao';
import { RacaoProduzir } from 'src/app/models/racaoProduzir';
import { OrdemProducaoService } from 'src/app/services/ordem-producao.service';
import { RacaoService } from 'src/app/services/racao.service';

@Component({
  selector: 'app-ordem-producao-create',
  templateUrl: './ordem-producao-create.component.html',
  styleUrls: ['./ordem-producao-create.component.css']
})
export class OrdemProducaoCreateComponent implements OnInit {

  ordemProducao: OrdemProducao = {
    idOrdemProducaoRacao: 0,
    descricao: '',
    data: null,
    valorOrdemProducao: 0,
    idFuncionario: 0,
    status: 0,
    lstRacaoProduzir: []
  }

  producao: RacaoProduzir = {
    idRacaoProduzir: 0,
    idRacao: 0,
    descrRacao: '',
    quantidade: 0
  }

  isRacaoProduzirAux: number = 0;

  title: string = "Cadastrar Ordem Produção"

  isUpdated: boolean = false

  racoes: Racao[] = []

  ELEMENT_DATA: RacaoProduzir[] = []

  displayedColumns: string[] = ['idRacao', 'descrRacao', 'quantidade', 'acoes'];
  dataSource = new MatTableDataSource<RacaoProduzir>(this.ELEMENT_DATA);

  constructor(private service: OrdemProducaoService,
              private serviceRacao: RacaoService,
              private toast: ToastrService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ordemProducao.idOrdemProducaoRacao = this.route.snapshot.paramMap.get('idOrdemProducao');

    if(this.ordemProducao.idOrdemProducaoRacao > 0){
      this.findById();
      this.isUpdated = true;
      this.title = "Atualizar Ordem de Produção";
    }

    this.findAllRacao();
  }

  findAllRacao(): void{
    this.serviceRacao.findAll().subscribe(resposta => {this.racoes = resposta;})
  }

  findById(): void{
    this.service.findById(this.ordemProducao.idOrdemProducaoRacao).subscribe(resposta => {
        this.ordemProducao = resposta;

        console.log(resposta);
        this.ELEMENT_DATA = this.ordemProducao.lstRacaoProduzir;
        this.dataSource = new MatTableDataSource<RacaoProduzir>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      } )
  }

  adicionarRacao(): void{
    //Alimentando o array para salvar na ordem de produção
    let novaProducao: RacaoProduzir = {idRacaoProduzir: this.isRacaoProduzirAux, idRacao: this.producao.idRacao, quantidade: this.producao.quantidade};

    if(!this.isUpdated){
      this.isRacaoProduzirAux++;
    }

    if(this.ordemProducao.lstRacaoProduzir.includes(novaProducao)){
      this.toast.info("Ração já cadastrada na Ordem de Produção com a mesma quantidade");
    }else{
      this.ordemProducao.lstRacaoProduzir.push(novaProducao);

      this.limpaProducao();

      //Buscando a descrição da ração TODO: VERIFICAR SE É POSSÍVEL MELHORAR
      this.serviceRacao.findById(novaProducao.idRacao).subscribe(resposta => {
        novaProducao.descrRacao = resposta.descricao;
      })

      //alimentando a table com a nova ração
      if (!this.isUpdated){
        this.ELEMENT_DATA.push(novaProducao);
      }

      this.dataSource = new MatTableDataSource<RacaoProduzir>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    }
  }

  deletarRacao(idRacaoProduzir: number): void{
    this.ordemProducao.lstRacaoProduzir.forEach(element => {
      if(element.idRacaoProduzir === idRacaoProduzir){

        //Remove da lista
        this.ordemProducao.lstRacaoProduzir.splice(this.ordemProducao.lstRacaoProduzir.indexOf(element), 1);
      }
    });

    if(!this.isUpdated){
      this.ELEMENT_DATA = (this.ordemProducao.lstRacaoProduzir);
    }

    //Atualiza a tabela
    this.dataSource = new MatTableDataSource<RacaoProduzir>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

  limpaProducao(): void{
    this.producao.idRacao = 0;
    this.producao.quantidade = 0;
  }

  create(): void {
    this.service.create(this.ordemProducao).subscribe(() => {
      this.toast.success('Ordem de Produção cadastrada com sucesso', 'Cadastro');
      this.router.navigate(['ordemProducao'])
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

  update():void{
    console.log(this.ordemProducao.lstRacaoProduzir);
    this.service.update(this.ordemProducao).subscribe(() => {
      this.toast.success('Ordem de Produção atualizada com sucesso', 'Alteração');
      this.router.navigate(['ordemProducao'])
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

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  retornaStatus(status: number): string{
    switch (status){
      case 0:
        return "Pronto";
      case 1:
        return"Liberado";
      case 2:
        return "Andamento";
      case 3:
        return "Suspenso";
      case 4:
        return "Cancelado";
       default:
        return "Status";
    }   
  }

}