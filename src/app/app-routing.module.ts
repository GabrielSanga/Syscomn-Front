import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { CurralpiqueteCreateComponent } from './components/curralpiquete/curralpiquete-create/curralpiquete-create.component';
import { CurralpiqueteDeleteComponent } from './components/curralpiquete/curralpiquete-delete/curralpiquete-delete.component';
import { CurralpiqueteListComponent } from './components/curralpiquete/curralpiquete-list/curralpiquete-list.component';
import { CurralpiqueteUpdateComponent } from './components/curralpiquete/curralpiquete-update/curralpiquete-update.component';
import { EstadoanimalCreateComponent } from './components/estadoanimal/estadoanimal-create/estadoanimal-create.component';
import { EstadoanimalDeleteComponent } from './components/estadoanimal/estadoanimal-delete/estadoanimal-delete.component';
import { EstadoanimalListComponent } from './components/estadoanimal/estadoanimal-list/estadoanimal-list.component';
import { EstadoanimalUpdateComponent } from './components/estadoanimal/estadoanimal-update/estadoanimal-update.component';
import { FornecedorCreateComponent } from './components/fornecedor/fornecedor-create/fornecedor-create.component';
import { FornecedorListComponent } from './components/fornecedor/fornecedor-list/fornecedor-list.component';
import { FornecedorUpdateComponent } from './components/fornecedor/fornecedor-update/fornecedor-update.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioListComponent } from './components/funcionario/funcionario-list/funcionario-list.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { HomeComponent } from './components/home/home.component';
import { LocalarmazenamentoCreateComponent } from './components/localarmazenamento/localarmazenamento-create/localarmazenamento-create.component';
import { LocalarmazenamentoDeleteComponent } from './components/localarmazenamento/localarmazenamento-delete/localarmazenamento-delete.component';
import { LocalarmazenamentoListComponent } from './components/localarmazenamento/localarmazenamento-list/localarmazenamento-list.component';
import { LocalarmazenamentoUpdateComponent } from './components/localarmazenamento/localarmazenamento-update/localarmazenamento-update.component';
import { LoginComponent } from './components/login/login.component';
import { LoteCreateComponent } from './components/lote/lote-create/lote-create.component';
import { LoteDeleteComponent } from './components/lote/lote-delete/lote-delete.component';
import { LoteListComponent } from './components/lote/lote-list/lote-list.component';
import { LoteUpdateComponent } from './components/lote/lote-update/lote-update.component';
import { MateriaprimaCreateComponent } from './components/materiaprima/materiaprima-create/materiaprima-create.component';
import { MateriaprimaDeleteComponent } from './components/materiaprima/materiaprima-delete/materiaprima-delete.component';
import { MateriaprimaListComponent } from './components/materiaprima/materiaprima-list/materiaprima-list.component';
import { MateriaprimaUpdateComponent } from './components/materiaprima/materiaprima-update/materiaprima-update.component';
import { NavComponent } from './components/nav/nav.component';
import { OrdemProducaoCreateComponent } from './components/ordemProducao/ordem-producao-create/ordem-producao-create.component';
import { OrdemProducaoListComponent } from './components/ordemProducao/ordem-producao-list/ordem-producao-list.component';
import { PropriedadeCreateComponent } from './components/propriedade/propriedade-create/propriedade-create.component';
import { PropriedadeDeleteComponent } from './components/propriedade/propriedade-delete/propriedade-delete.component';
import { PropriedadeListComponent } from './components/propriedade/propriedade-list/propriedade-list.component';
import { PropriedadeUpdateComponent } from './components/propriedade/propriedade-update/propriedade-update.component';
import { RacaCreateComponent } from './components/raca/raca-create/raca-create.component';
import { RacaDeleteComponent } from './components/raca/raca-delete/raca-delete.component';
import { RacaListComponent } from './components/raca/raca-list/raca-list.component';
import { RacaUpdateComponent } from './components/raca/raca-update/raca-update.component';
import { FormulaCreateComponent } from './components/racao/formula/formula-create/formula-create.component';
import { RacaoCreateComponent } from './components/racao/racao-create/racao-create.component';
import { RacaoListComponent } from './components/racao/racao-list/racao-list.component';
import { RacaoUpdateComponent } from './components/racao/racao-update/racao-update.component';
import { RegimeengordaCreateComponent } from './components/regimeengorda/regimeengorda-create/regimeengorda-create.component';
import { RegimeengordaDeleteComponent } from './components/regimeengorda/regimeengorda-delete/regimeengorda-delete.component';
import { RegimeengordaListComponent } from './components/regimeengorda/regimeengorda-list/regimeengorda-list.component';
import { RegimeengordaUpdateComponent } from './components/regimeengorda/regimeengorda-update/regimeengorda-update.component';
import { SexoanimalCreateComponent } from './components/sexoanimal/sexoanimal-create/sexoanimal-create.component';
import { SexoanimalDeleteComponent } from './components/sexoanimal/sexoanimal-delete/sexoanimal-delete.component';
import { SexoanimalListComponent } from './components/sexoanimal/sexoanimal-list/sexoanimal-list.component';
import { SexoanimalUpdateComponent } from './components/sexoanimal/sexoanimal-update/sexoanimal-update.component';
import { TipofornecedorCreateComponent } from './components/tipofornecedor/tipofornecedor-create/tipofornecedor-create.component';
import { TipofornecedorDeleteComponent } from './components/tipofornecedor/tipofornecedor-delete/tipofornecedor-delete.component';
import { TipofornecedorListComponent } from './components/tipofornecedor/tipofornecedor-list/tipofornecedor-list.component';
import { TipofornecedorUpdateComponent } from './components/tipofornecedor/tipofornecedor-update/tipofornecedor-update.component';
import { TipomorteCreateComponent } from './components/tipomorte/tipomorte-create/tipomorte-create.component';
import { TipomorteDeleteComponent } from './components/tipomorte/tipomorte-delete/tipomorte-delete.component';
import { TipomorteListComponent } from './components/tipomorte/tipomorte-list/tipomorte-list.component';
import { TipomorteUpdadeComponent } from './components/tipomorte/tipomorte-updade/tipomorte-updade.component';
import { VacinaCreateComponent } from './components/vacina/vacina-create/vacina-create.component';
import { VacinaDeleteComponent } from './components/vacina/vacina-delete/vacina-delete.component';
import { VacinaListComponent } from './components/vacina/vacina-list/vacina-list.component';
import { VacinaUpdateComponent } from './components/vacina/vacina-update/vacina-update.component';

const routes: Routes = [
 {path: 'login', component: LoginComponent},

 {path: 'administrador', component: AdministradorComponent},
 
 {path: '', component: NavComponent, canActivate: [AuthGuard], children:[
    {  path: 'home', component:  HomeComponent},

    {  path: 'tipomorte', component:  TipomorteListComponent},
    {  path: 'tipomorte/create', component:  TipomorteCreateComponent},
    {  path: 'tipomorte/update/:idTipoMorte', component:  TipomorteUpdadeComponent},
    {  path: 'tipomorte/delete/:idTipoMorte', component:  TipomorteDeleteComponent},

    {  path: 'localarmazenamento', component:  LocalarmazenamentoListComponent},
    {  path: 'localarmazenamento/create', component:  LocalarmazenamentoCreateComponent},
    {  path: 'localarmazenamento/update/:idLocalArmazenamento', component:  LocalarmazenamentoUpdateComponent},
    {  path: 'localarmazenamento/delete/:idLocalArmazenamento', component:  LocalarmazenamentoDeleteComponent},

    {  path: 'estadoanimal', component:  EstadoanimalListComponent},
    {  path: 'estadoanimal/create', component:  EstadoanimalCreateComponent},
    {  path: 'estadoanimal/update/:idEstadoAnimal', component:  EstadoanimalUpdateComponent},
    {  path: 'estadoanimal/delete/:idEstadoAnimal', component:  EstadoanimalDeleteComponent},

    {  path: 'sexoanimal', component:  SexoanimalListComponent},
    {  path: 'sexoanimal/create', component:  SexoanimalCreateComponent},
    {  path: 'sexoanimal/update/:idSexoAnimal', component:  SexoanimalUpdateComponent},
    {  path: 'sexoanimal/delete/:idSexoAnimal', component:  SexoanimalDeleteComponent},

    {  path: 'propriedade', component:  PropriedadeListComponent},
    {  path: 'propriedade/create', component:  PropriedadeCreateComponent},
    {  path: 'propriedade/update/:idPropriedade', component:  PropriedadeUpdateComponent},
    {  path: 'propriedade/delete/:idPropriedade', component:  PropriedadeDeleteComponent},

    {  path: 'materiaprima', component: MateriaprimaListComponent},
    {  path: 'materiaprima/create', component: MateriaprimaCreateComponent},
    {  path: 'materiaprima/update/:idMateriaPrima', component: MateriaprimaUpdateComponent},
    {  path: 'materiaprima/delete/:idMateriaPrima', component: MateriaprimaDeleteComponent},

    { path: 'tipofornecedor', component: TipofornecedorListComponent },
    { path: 'tipofornecedor/create', component: TipofornecedorCreateComponent },
    { path: 'tipofornecedor/update/:idTipoFornecedor', component: TipofornecedorUpdateComponent },
    { path: 'tipofornecedor/delete/:idTipoFornecedor', component: TipofornecedorDeleteComponent },
    
    { path: 'raca', component: RacaListComponent },
    { path: 'raca/create', component: RacaCreateComponent },
    { path: 'raca/update/:idRaca', component: RacaUpdateComponent },
    { path: 'raca/delete/:idRaca', component: RacaDeleteComponent },

    { path: 'regimeengorda', component: RegimeengordaListComponent },
    { path: 'regimeengorda/create', component: RegimeengordaCreateComponent },
    { path: 'regimeengorda/update/:idRegimeEngorda', component: RegimeengordaUpdateComponent },
    { path: 'regimeengorda/delete/:idRegimeEngorda', component: RegimeengordaDeleteComponent },

    { path: 'funcionario', component: FuncionarioListComponent },
    { path: 'funcionario/create', component: FuncionarioCreateComponent },
    { path: 'funcionario/update/:idPessoa', component: FuncionarioUpdateComponent },
 
    { path: 'fornecedor', component: FornecedorListComponent },
    { path: 'fornecedor/create', component: FornecedorCreateComponent },
    { path: 'fornecedor/update/:idPessoa', component: FornecedorUpdateComponent },

    { path: 'racao', component: RacaoListComponent },
    { path: 'racao/create', component: RacaoCreateComponent },
    { path: 'racao/update/:idRacao', component: RacaoUpdateComponent },
    { path: 'racao/formula/formula/create/:idRacao', component: FormulaCreateComponent },

    { path: 'ordemProducao', component: OrdemProducaoListComponent },
    { path: 'ordemProducao/create', component: OrdemProducaoCreateComponent },
    { path: 'ordemProducao/create/:idOrdemProducao', component: OrdemProducaoCreateComponent },

    { path: 'curralpiquete', component: CurralpiqueteListComponent },
    { path: 'curralpiquete/create', component: CurralpiqueteCreateComponent },
    { path: 'curralpiquete/update/:idCurralPiquete', component: CurralpiqueteUpdateComponent },
    { path: 'curralpiquete/delete/:idCurralPiquete', component: CurralpiqueteDeleteComponent },

    { path: 'lote', component: LoteListComponent },
    { path: 'lote/create', component: LoteCreateComponent },
    { path: 'lote/update/:idLote', component: LoteUpdateComponent },
    { path: 'lote/delete/:idLote', component: LoteDeleteComponent },

    { path: 'vacina', component: VacinaListComponent },
    { path: 'vacina/create', component: VacinaCreateComponent },
    { path: 'vacina/update/:idVacina', component: VacinaUpdateComponent },
    { path: 'vacina/delete/:idVacina', component: VacinaDeleteComponent },

   ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
