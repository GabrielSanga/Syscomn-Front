import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { AdministradorComponent } from './components/Pessoa/administrador/administrador.component';
import { CurralpiqueteCreateComponent } from './components/Animal/curralpiquete/curralpiquete-create/curralpiquete-create.component';
import { CurralpiqueteDeleteComponent } from './components/Animal/curralpiquete/curralpiquete-delete/curralpiquete-delete.component';
import { CurralpiqueteListComponent } from './components/Animal/curralpiquete/curralpiquete-list/curralpiquete-list.component';
import { CurralpiqueteUpdateComponent } from './components/Animal/curralpiquete/curralpiquete-update/curralpiquete-update.component';
import { EstadoanimalCreateComponent } from './components/Animal/estadoanimal/estadoanimal-create/estadoanimal-create.component';
import { EstadoanimalDeleteComponent } from './components/Animal/estadoanimal/estadoanimal-delete/estadoanimal-delete.component';
import { EstadoanimalListComponent } from './components/Animal/estadoanimal/estadoanimal-list/estadoanimal-list.component';
import { EstadoanimalUpdateComponent } from './components/Animal/estadoanimal/estadoanimal-update/estadoanimal-update.component';
import { FornecedorCreateComponent } from './components/Pessoa/fornecedor/fornecedor-create/fornecedor-create.component';
import { FornecedorListComponent } from './components/Pessoa/fornecedor/fornecedor-list/fornecedor-list.component';
import { FornecedorUpdateComponent } from './components/Pessoa/fornecedor/fornecedor-update/fornecedor-update.component';
import { FuncionarioCreateComponent } from './components/Pessoa/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioListComponent } from './components/Pessoa/funcionario/funcionario-list/funcionario-list.component';
import { FuncionarioUpdateComponent } from './components/Pessoa/funcionario/funcionario-update/funcionario-update.component';
import { HomeComponent } from './components/Layout/home/home.component';
import { LocalarmazenamentoCreateComponent } from './components/PCP/localarmazenamento/localarmazenamento-create/localarmazenamento-create.component';
import { LocalarmazenamentoDeleteComponent } from './components/PCP/localarmazenamento/localarmazenamento-delete/localarmazenamento-delete.component';
import { LocalarmazenamentoListComponent } from './components/PCP/localarmazenamento/localarmazenamento-list/localarmazenamento-list.component';
import { LocalarmazenamentoUpdateComponent } from './components/PCP/localarmazenamento/localarmazenamento-update/localarmazenamento-update.component';
import { LoginComponent } from './components/Layout/login/login.component';
import { LoteProducaoCreateComponent } from './components/Manejos/loteProducao/lote-producao-create/lote-producao-create.component';
import { LoteCreateComponent } from './components/Animal/lote/lote-create/lote-create.component';
import { LoteDeleteComponent } from './components/Animal/lote/lote-delete/lote-delete.component';
import { LoteListComponent } from './components/Animal/lote/lote-list/lote-list.component';
import { LoteUpdateComponent } from './components/Animal/lote/lote-update/lote-update.component';
import { MateriaprimaCreateComponent } from './components/PCP/materiaprima/materiaprima-create/materiaprima-create.component';
import { MateriaprimaDeleteComponent } from './components/PCP/materiaprima/materiaprima-delete/materiaprima-delete.component';
import { MateriaprimaListComponent } from './components/PCP/materiaprima/materiaprima-list/materiaprima-list.component';
import { MateriaprimaUpdateComponent } from './components/PCP/materiaprima/materiaprima-update/materiaprima-update.component';
import { NavComponent } from './components/Layout/content/nav.component';
import { OrdemProducaoCreateComponent } from './components/PCP/ordemProducao/ordem-producao-create/ordem-producao-create.component';
import { OrdemProducaoListComponent } from './components/PCP/ordemProducao/ordem-producao-list/ordem-producao-list.component';
import { PropriedadeCreateComponent } from './components/Pessoa/propriedade/propriedade-create/propriedade-create.component';
import { PropriedadeDeleteComponent } from './components/Pessoa/propriedade/propriedade-delete/propriedade-delete.component';
import { PropriedadeListComponent } from './components/Pessoa/propriedade/propriedade-list/propriedade-list.component';
import { PropriedadeUpdateComponent } from './components/Pessoa/propriedade/propriedade-update/propriedade-update.component';
import { RacaCreateComponent } from './components/Animal/raca/raca-create/raca-create.component';
import { RacaDeleteComponent } from './components/Animal/raca/raca-delete/raca-delete.component';
import { RacaListComponent } from './components/Animal/raca/raca-list/raca-list.component';
import { RacaUpdateComponent } from './components/Animal/raca/raca-update/raca-update.component';
import { FormulaCreateComponent } from './components/PCP/racao/formula/formula-create/formula-create.component';
import { RacaoCreateComponent } from './components/PCP/racao/racao-create/racao-create.component';
import { RacaoListComponent } from './components/PCP/racao/racao-list/racao-list.component';
import { RacaoUpdateComponent } from './components/PCP/racao/racao-update/racao-update.component';
import { RegimeengordaCreateComponent } from './components/Animal/regimeengorda/regimeengorda-create/regimeengorda-create.component';
import { RegimeengordaDeleteComponent } from './components/Animal/regimeengorda/regimeengorda-delete/regimeengorda-delete.component';
import { RegimeengordaListComponent } from './components/Animal/regimeengorda/regimeengorda-list/regimeengorda-list.component';
import { RegimeengordaUpdateComponent } from './components/Animal/regimeengorda/regimeengorda-update/regimeengorda-update.component';
import { SexoanimalCreateComponent } from './components/Animal/sexoanimal/sexoanimal-create/sexoanimal-create.component';
import { SexoanimalDeleteComponent } from './components/Animal/sexoanimal/sexoanimal-delete/sexoanimal-delete.component';
import { SexoanimalListComponent } from './components/Animal/sexoanimal/sexoanimal-list/sexoanimal-list.component';
import { SexoanimalUpdateComponent } from './components/Animal/sexoanimal/sexoanimal-update/sexoanimal-update.component';
import { TipofornecedorCreateComponent } from './components/Pessoa/tipofornecedor/tipofornecedor-create/tipofornecedor-create.component';
import { TipofornecedorDeleteComponent } from './components/Pessoa/tipofornecedor/tipofornecedor-delete/tipofornecedor-delete.component';
import { TipofornecedorListComponent } from './components/Pessoa/tipofornecedor/tipofornecedor-list/tipofornecedor-list.component';
import { TipofornecedorUpdateComponent } from './components/Pessoa/tipofornecedor/tipofornecedor-update/tipofornecedor-update.component';
import { TipomorteCreateComponent } from './components/Animal/tipomorte/tipomorte-create/tipomorte-create.component';
import { TipomorteDeleteComponent } from './components/Animal/tipomorte/tipomorte-delete/tipomorte-delete.component';
import { TipomorteListComponent } from './components/Animal/tipomorte/tipomorte-list/tipomorte-list.component';
import { TipomorteUpdadeComponent } from './components/Animal/tipomorte/tipomorte-updade/tipomorte-updade.component';
import { VacinaListComponent } from './components/Animal/vacina/vacina-list/vacina-list.component';
import { VacinaCreateComponent } from './components/Animal/vacina/vacina-create/vacina-create.component';
import { VacinaUpdateComponent } from './components/Animal/vacina/vacina-update/vacina-update.component';
import { VacinaDeleteComponent } from './components/Animal/vacina/vacina-delete/vacina-delete.component';
import { AnimalchipCreateComponent } from './components/Animal/animalchip/animalchip-create/animalchip-create.component';
import { AnimalchipListComponent } from './components/Animal/animalchip/animalchip-list/animalchip-list.component';
import { AnimalChipUpdateComponent } from './components/Animal/animalchip/animal-chip-update/animal-chip-update.component';
import { EstoqueProducaoComponent } from './components/Consultas/estoque/estoque-producao/estoque-producao.component';
import { PesagemCreateComponent } from './components/Manejos/pesagem/pesagem-create/pesagem-create.component';
import { AnalisesComponent } from './components/Dashboard/analises/analises.component';
import { AlimentacaoCreateComponent } from './components/Manejos/alimentacao/alimentacao-create/alimentacao-create.component';
import { VacinacaoCreateComponent } from './components/Manejos/vacinacao/vacinacao-create/vacinacao-create.component';
import { RelatoriosComponent } from './components/Relatorios/relatorios/relatorios.component';
import { Error403Component } from './components/Error-Page/403/error403/error403.component';
import { AdministradorListComponent } from './components/Pessoa/administrador/administrador-list/administrador-list/administrador-list.component';

const routes: Routes = [
 {path: 'login', component: LoginComponent},

 {path: 'administrador', component: AdministradorComponent},
 
 {path: '', component: NavComponent, canActivate: [AuthGuard], children:[
    {  path: 'home', component:  HomeComponent},

    { path: 'analise', component: AnalisesComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_ADMIN'] }},

    { path: 'administrador/list', component: AdministradorListComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_ADMIN'] }},
    { path: 'administrador/:idPessoa', component: AdministradorComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_ADMIN'] }},

    {  path: 'tipomorte', component:  TipomorteListComponent},
    {  path: 'tipomorte/create', component:  TipomorteCreateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},
    {  path: 'tipomorte/update/:idTipoMorte', component:  TipomorteUpdadeComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},
    {  path: 'tipomorte/delete/:idTipoMorte', component:  TipomorteDeleteComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},

    {  path: 'localarmazenamento', component:  LocalarmazenamentoListComponent},
    {  path: 'localarmazenamento/create', component:  LocalarmazenamentoCreateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},
    {  path: 'localarmazenamento/update/:idLocalArmazenamento', component:  LocalarmazenamentoUpdateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},
    {  path: 'localarmazenamento/delete/:idLocalArmazenamento', component:  LocalarmazenamentoDeleteComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},

    {  path: 'estadoanimal', component:  EstadoanimalListComponent},
    {  path: 'estadoanimal/create', component:  EstadoanimalCreateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},
    {  path: 'estadoanimal/update/:idEstadoAnimal', component:  EstadoanimalUpdateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},
    {  path: 'estadoanimal/delete/:idEstadoAnimal', component:  EstadoanimalDeleteComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},

    {  path: 'sexoanimal', component:  SexoanimalListComponent},
    {  path: 'sexoanimal/create', component:  SexoanimalCreateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},
    {  path: 'sexoanimal/update/:idSexoAnimal', component:  SexoanimalUpdateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},
    {  path: 'sexoanimal/delete/:idSexoAnimal', component:  SexoanimalDeleteComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},

    {  path: 'propriedade', component:  PropriedadeListComponent},
    {  path: 'propriedade/create', component:  PropriedadeCreateComponent},
    {  path: 'propriedade/update/:idPropriedade', component:  PropriedadeUpdateComponent},
    {  path: 'propriedade/delete/:idPropriedade', component:  PropriedadeDeleteComponent},

    {  path: 'materiaprima', component: MateriaprimaListComponent},
    {  path: 'materiaprima/create', component: MateriaprimaCreateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},
    {  path: 'materiaprima/update/:idMateriaPrima', component: MateriaprimaUpdateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},
    {  path: 'materiaprima/delete/:idMateriaPrima', component: MateriaprimaDeleteComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},

    { path: 'tipofornecedor', component: TipofornecedorListComponent },
    { path: 'tipofornecedor/create', component: TipofornecedorCreateComponent },
    { path: 'tipofornecedor/update/:idTipoFornecedor', component: TipofornecedorUpdateComponent },
    { path: 'tipofornecedor/delete/:idTipoFornecedor', component: TipofornecedorDeleteComponent },
    
    { path: 'raca', component: RacaListComponent },
    { path: 'raca/create', component: RacaCreateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] } },
    { path: 'raca/update/:idRaca', component: RacaUpdateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] } },
    { path: 'raca/delete/:idRaca', component: RacaDeleteComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] } },

    { path: 'regimeengorda', component: RegimeengordaListComponent },
    { path: 'regimeengorda/create', component: RegimeengordaCreateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] } },
    { path: 'regimeengorda/update/:idRegimeEngorda', component: RegimeengordaUpdateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] } },
    { path: 'regimeengorda/delete/:idRegimeEngorda', component: RegimeengordaDeleteComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] } },

    { path: 'funcionario', component: FuncionarioListComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_ADMIN'] }},
    { path: 'funcionario/create', component: FuncionarioCreateComponent },
    { path: 'funcionario/update/:idPessoa', component: FuncionarioUpdateComponent },
 
    { path: 'fornecedor', component: FornecedorListComponent },
    { path: 'fornecedor/create', component: FornecedorCreateComponent },
    { path: 'fornecedor/update/:idPessoa', component: FornecedorUpdateComponent },

    { path: 'racao', component: RacaoListComponent },
    { path: 'racao/create', component: RacaoCreateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},
    { path: 'racao/update/:idRacao', component: RacaoUpdateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},
    { path: 'racao/formula/formula/create/:idRacao', component: FormulaCreateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},

    { path: 'ordemProducao', component: OrdemProducaoListComponent},
    { path: 'ordemProducao/create', component: OrdemProducaoCreateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},
    { path: 'ordemProducao/create/:idOrdemProducao', component: OrdemProducaoCreateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},

    { path: 'loteProducao', component: LoteProducaoCreateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},

    { path: 'curralpiquete', component: CurralpiqueteListComponent },
    { path: 'curralpiquete/create', component: CurralpiqueteCreateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] } },
    { path: 'curralpiquete/update/:idCurralPiquete', component: CurralpiqueteUpdateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] } },
    { path: 'curralpiquete/delete/:idCurralPiquete', component: CurralpiqueteDeleteComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] } },

    { path: 'lote', component: LoteListComponent },
    { path: 'lote/create', component: LoteCreateComponent },
    { path: 'lote/update/:idLote', component: LoteUpdateComponent },
    { path: 'lote/delete/:idLote', component: LoteDeleteComponent },

    { path: 'vacina', component: VacinaListComponent },
    { path: 'vacina/create', component: VacinaCreateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] } },
    { path: 'vacina/update/:idVacina', component: VacinaUpdateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] } },
    { path: 'vacina/delete/:idVacina', component: VacinaDeleteComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] } },

    { path: 'animalchip', component: AnimalchipListComponent },
    { path: 'animalchip/create', component: AnimalchipCreateComponent },
    { path: 'animalchip/update/:idAnimalChip', component: AnimalChipUpdateComponent },

    { path: 'estoque', component: EstoqueProducaoComponent },

    { path: 'pesagem', component: PesagemCreateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},

    { path: 'alimentacao', component: AlimentacaoCreateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},
 
    { path: 'vacinacao', component: VacinacaoCreateComponent, canActivate: [AuthGuard],  data: { roles:['ROLE_FUNCIONARIO'] }},

    { path: 'relatorio', component: RelatoriosComponent },

   ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
