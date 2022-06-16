import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Para trabalhar com formulários no Angular 12
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Imports para componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatMenu, MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSortModule} from '@angular/material/sort';

// Componentes do Projeto
import { NavComponent } from './components/Layout/content/nav.component';
import { TipomorteListComponent } from './components/Animal/tipomorte/tipomorte-list/tipomorte-list.component';
import { HomeComponent } from './components/Layout/home/home.component';
import { TipomorteCreateComponent } from './components/Animal/tipomorte/tipomorte-create/tipomorte-create.component';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { TipomorteUpdadeComponent } from './components/Animal/tipomorte/tipomorte-updade/tipomorte-updade.component';
import { TipomorteDeleteComponent } from './components/Animal/tipomorte/tipomorte-delete/tipomorte-delete.component';
import { LocalarmazenamentoListComponent } from './components/PCP/localarmazenamento/localarmazenamento-list/localarmazenamento-list.component';
import { LocalarmazenamentoCreateComponent } from './components/PCP/localarmazenamento/localarmazenamento-create/localarmazenamento-create.component';
import { LocalarmazenamentoUpdateComponent } from './components/PCP/localarmazenamento/localarmazenamento-update/localarmazenamento-update.component';
import { LocalarmazenamentoDeleteComponent } from './components/PCP/localarmazenamento/localarmazenamento-delete/localarmazenamento-delete.component';
import { EstadoanimalListComponent } from './components/Animal/estadoanimal/estadoanimal-list/estadoanimal-list.component';
import { EstadoanimalCreateComponent } from './components/Animal/estadoanimal/estadoanimal-create/estadoanimal-create.component';
import { EstadoanimalDeleteComponent } from './components/Animal/estadoanimal/estadoanimal-delete/estadoanimal-delete.component';
import { EstadoanimalUpdateComponent } from './components/Animal/estadoanimal/estadoanimal-update/estadoanimal-update.component';
import { RegimeengordaListComponent } from './components/Animal/regimeengorda/regimeengorda-list/regimeengorda-list.component';
import { SexoanimalListComponent } from './components/Animal/sexoanimal/sexoanimal-list/sexoanimal-list.component';
import { SexoanimalCreateComponent } from './components/Animal/sexoanimal/sexoanimal-create/sexoanimal-create.component';
import { SexoanimalDeleteComponent } from './components/Animal/sexoanimal/sexoanimal-delete/sexoanimal-delete.component';
import { SexoanimalUpdateComponent } from './components/Animal/sexoanimal/sexoanimal-update/sexoanimal-update.component';
import { PropriedadeListComponent } from './components/Pessoa/propriedade/propriedade-list/propriedade-list.component';
import { PropriedadeCreateComponent } from './components/Pessoa/propriedade/propriedade-create/propriedade-create.component';
import { PropriedadeDeleteComponent } from './components/Pessoa/propriedade/propriedade-delete/propriedade-delete.component';
import { PropriedadeUpdateComponent } from './components/Pessoa/propriedade/propriedade-update/propriedade-update.component';
import { AssinanteListComponent } from './components/Pessoa/assinante/assinante-list/assinante-list.component';
import { AssinanteCreateComponent } from './components/Pessoa/assinante/assinante-create/assinante-create.component';
import { AssinanteDeleteComponent } from './components/Pessoa/assinante/assinante-delete/assinante-delete.component';
import { AssinanteUpdateComponent } from './components/Pessoa/assinante/assinante-update/assinante-update.component';
import { MateriaprimaListComponent } from './components/PCP/materiaprima/materiaprima-list/materiaprima-list.component';
import { MateriaprimaCreateComponent } from './components/PCP/materiaprima/materiaprima-create/materiaprima-create.component';
import { MateriaprimaDeleteComponent } from './components/PCP/materiaprima/materiaprima-delete/materiaprima-delete.component';
import { MateriaprimaUpdateComponent } from './components/PCP/materiaprima/materiaprima-update/materiaprima-update.component';
import { RacaListComponent } from './components/Animal/raca/raca-list/raca-list.component';
import { RacaCreateComponent } from './components/Animal/raca/raca-create/raca-create.component';
import { RacaUpdateComponent } from './components/Animal/raca/raca-update/raca-update.component';
import { RacaDeleteComponent } from './components/Animal/raca/raca-delete/raca-delete.component';
import { TipofornecedorListComponent } from './components/Pessoa/tipofornecedor/tipofornecedor-list/tipofornecedor-list.component';
import { TipofornecedorCreateComponent } from './components/Pessoa/tipofornecedor/tipofornecedor-create/tipofornecedor-create.component';
import { TipofornecedorDeleteComponent } from './components/Pessoa/tipofornecedor/tipofornecedor-delete/tipofornecedor-delete.component';
import { TipofornecedorUpdateComponent } from './components/Pessoa/tipofornecedor/tipofornecedor-update/tipofornecedor-update.component';
import { RegimeengordaCreateComponent } from './components/Animal/regimeengorda/regimeengorda-create/regimeengorda-create.component';
import { RegimeengordaDeleteComponent } from './components/Animal/regimeengorda/regimeengorda-delete/regimeengorda-delete.component';
import { RegimeengordaUpdateComponent } from './components/Animal/regimeengorda/regimeengorda-update/regimeengorda-update.component';
import { FuncionarioCreateComponent } from './components/Pessoa/funcionario/funcionario-create/funcionario-create.component';
import { LoginComponent } from './components/Layout/login/login.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { AdministradorComponent } from './components/Pessoa/administrador/administrador.component';
import { FornecedorListComponent } from './components/Pessoa/fornecedor/fornecedor-list/fornecedor-list.component';
import { FornecedorUpdateComponent } from './components/Pessoa/fornecedor/fornecedor-update/fornecedor-update.component';
import { FornecedorCreateComponent } from './components/Pessoa/fornecedor/fornecedor-create/fornecedor-create.component';
import { FuncionarioListComponent } from './components/Pessoa/funcionario/funcionario-list/funcionario-list.component';
import { FuncionarioUpdateComponent } from './components/Pessoa/funcionario/funcionario-update/funcionario-update.component';
import { PerfilDialogComponent } from './components/Modals/perfil-dialog/perfil-dialog.component';
import { RacaoCreateComponent } from './components/PCP/racao/racao-create/racao-create.component';
import { RacaoListComponent } from './components/PCP/racao/racao-list/racao-list.component';
import { RacaoUpdateComponent } from './components/PCP/racao/racao-update/racao-update.component';
import { FormulaCreateComponent } from './components/PCP/racao/formula/formula-create/formula-create.component';
import { OrdemProducaoCreateComponent } from './components/PCP/ordemProducao/ordem-producao-create/ordem-producao-create.component';
import { OrdemProducaoListComponent } from './components/PCP/ordemProducao/ordem-producao-list/ordem-producao-list.component';
import { LoteProducaoCreateComponent } from './components/Manejos/loteProducao/lote-producao-create/lote-producao-create.component';
import { CurralpiqueteCreateComponent } from './components/Animal/curralpiquete/curralpiquete-create/curralpiquete-create.component';
import { CurralpiqueteUpdateComponent } from './components/Animal/curralpiquete/curralpiquete-update/curralpiquete-update.component';
import { CurralpiqueteListComponent } from './components/Animal/curralpiquete/curralpiquete-list/curralpiquete-list.component';
import { CurralpiqueteDeleteComponent } from './components/Animal/curralpiquete/curralpiquete-delete/curralpiquete-delete.component';
import { LoteCreateComponent } from './components/Animal/lote/lote-create/lote-create.component';
import { LoteUpdateComponent } from './components/Animal/lote/lote-update/lote-update.component';
import { LoteListComponent } from './components/Animal/lote/lote-list/lote-list.component';
import { LoteDeleteComponent } from './components/Animal/lote/lote-delete/lote-delete.component';
import { MovimentacaoDialogComponent } from './components/Modals/movimentacao-dialog/movimentacao-dialog.component';
import { VacinaCreateComponent } from './components/Animal/vacina/vacina-create/vacina-create.component';
import { VacinaUpdateComponent } from './components/Animal/vacina/vacina-update/vacina-update.component';
import { VacinaDeleteComponent } from './components/Animal/vacina/vacina-delete/vacina-delete.component';
import { VacinaListComponent } from './components/Animal/vacina/vacina-list/vacina-list.component';
import { AnimalchipCreateComponent } from './components/Animal/animalchip/animalchip-create/animalchip-create.component';
import { AnimalchipListComponent } from './components/Animal/animalchip/animalchip-list/animalchip-list.component';
import { AnimalChipUpdateComponent } from './components/Animal/animalchip/animal-chip-update/animal-chip-update.component';
import { EstoqueProducaoComponent } from './components/Consultas/estoque/estoque-producao/estoque-producao.component';
import { PesagemCreateComponent } from './components/Manejos/pesagem/pesagem-create/pesagem-create.component';
import { AnalisesComponent } from './components/Dashboard/analises/analises.component';
import { AlimentacaoCreateComponent } from './components/Manejos/alimentacao/alimentacao-create/alimentacao-create.component';
import { VacinacaoCreateComponent } from './components/Manejos/vacinacao/vacinacao-create/vacinacao-create.component';
import { AlimentacaoDialogComponent } from './components/Modals/alimentacao-dialog/alimentacao-dialog/alimentacao-dialog.component';
import { PesagemDialogComponent } from './components/Modals/pesagem-dialog/pesagem-dialog/pesagem-dialog.component';
import { VacinacaoDialogComponent } from './components/Modals/vacinacao-dialog/vacinacao-dialog/vacinacao-dialog.component';
import { PerfilUserDialogComponent } from './components/Modals/perfil-user-dialog/perfil-user-dialog/perfil-user-dialog.component';
import { Error403Component } from './components/Error-Page/403/error403/error403.component';
import { Error404Component } from './components/Error-Page/404/error404/error404.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TipomorteListComponent,
    HomeComponent,
    TipomorteCreateComponent,
    TipomorteUpdadeComponent,
    TipomorteDeleteComponent,
    LocalarmazenamentoListComponent,
    LocalarmazenamentoCreateComponent,
    LocalarmazenamentoUpdateComponent,
    LocalarmazenamentoDeleteComponent,
    EstadoanimalListComponent,
    EstadoanimalCreateComponent,
    EstadoanimalDeleteComponent,
    EstadoanimalUpdateComponent,
    RegimeengordaListComponent,
    SexoanimalListComponent,
    SexoanimalCreateComponent,
    SexoanimalDeleteComponent,
    SexoanimalUpdateComponent,
    PropriedadeListComponent,
    PropriedadeCreateComponent,
    PropriedadeDeleteComponent,
    PropriedadeUpdateComponent,
    AssinanteListComponent,
    AssinanteCreateComponent,
    AssinanteDeleteComponent,
    AssinanteUpdateComponent,
    MateriaprimaListComponent,
    MateriaprimaCreateComponent,
    MateriaprimaDeleteComponent,
    MateriaprimaUpdateComponent,
    RacaListComponent,
    RacaCreateComponent,
    RacaUpdateComponent,
    RacaDeleteComponent,
    TipofornecedorListComponent,
    TipofornecedorCreateComponent,
    TipofornecedorDeleteComponent,
    TipofornecedorUpdateComponent,
    RegimeengordaCreateComponent,
    RegimeengordaDeleteComponent,
    RegimeengordaUpdateComponent,
    FuncionarioCreateComponent,
    LoginComponent,
    AdministradorComponent,
    FornecedorListComponent,
    FornecedorUpdateComponent,
    FornecedorCreateComponent,
    FuncionarioListComponent,
    FuncionarioUpdateComponent,
    PerfilDialogComponent,
    RacaoCreateComponent,
    RacaoListComponent,
    RacaoUpdateComponent,
    FormulaCreateComponent,
    OrdemProducaoCreateComponent,
    OrdemProducaoListComponent,
    LoteProducaoCreateComponent,
    CurralpiqueteCreateComponent,
    CurralpiqueteUpdateComponent,
    CurralpiqueteListComponent,
    CurralpiqueteDeleteComponent,
    LoteCreateComponent,
    LoteUpdateComponent,
    LoteListComponent,
    LoteDeleteComponent,
    MovimentacaoDialogComponent,
    VacinaCreateComponent,
    VacinaUpdateComponent,
    VacinaDeleteComponent,
    VacinaListComponent,
    AnimalchipCreateComponent,
    AnimalchipListComponent,
    AnimalChipUpdateComponent,
    EstoqueProducaoComponent,
    PesagemCreateComponent,
    AnalisesComponent,
    AlimentacaoCreateComponent,
    VacinacaoCreateComponent,
    AlimentacaoDialogComponent,
    PesagemDialogComponent,
    VacinacaoDialogComponent,
    PerfilUserDialogComponent,
    Error403Component,
    Error404Component
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
    NgxMaskModule.forRoot(),
    ModalDialogModule.forRoot(),
    MatDialogModule,
    MatExpansionModule,
    MatSortModule
  ],
  providers: [AuthInterceptorProvider, {
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
