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
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatMenu, MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';


// Componentes do Projeto
import { NavComponent } from './components/nav/nav.component';
import { TipomorteListComponent } from './components/tipomorte/tipomorte-list/tipomorte-list.component';
import { HomeComponent } from './components/home/home.component';
import { TipomorteCreateComponent } from './components/tipomorte/tipomorte-create/tipomorte-create.component';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { TipomorteUpdadeComponent } from './components/tipomorte/tipomorte-updade/tipomorte-updade.component';
import { TipomorteDeleteComponent } from './components/tipomorte/tipomorte-delete/tipomorte-delete.component';
import { LocalarmazenamentoListComponent } from './components/localarmazenamento/localarmazenamento-list/localarmazenamento-list.component';
import { LocalarmazenamentoCreateComponent } from './components/localarmazenamento/localarmazenamento-create/localarmazenamento-create.component';
import { LocalarmazenamentoUpdateComponent } from './components/localarmazenamento/localarmazenamento-update/localarmazenamento-update.component';
import { LocalarmazenamentoDeleteComponent } from './components/localarmazenamento/localarmazenamento-delete/localarmazenamento-delete.component';
import { EstadoanimalListComponent } from './components/estadoanimal/estadoanimal-list/estadoanimal-list.component';
import { EstadoanimalCreateComponent } from './components/estadoanimal/estadoanimal-create/estadoanimal-create.component';
import { EstadoanimalDeleteComponent } from './components/estadoanimal/estadoanimal-delete/estadoanimal-delete.component';
import { EstadoanimalUpdateComponent } from './components/estadoanimal/estadoanimal-update/estadoanimal-update.component';
import { RegimeengordaListComponent } from './components/regimeengorda/regimeengorda-list/regimeengorda-list.component';
import { SexoanimalListComponent } from './components/sexoanimal/sexoanimal-list/sexoanimal-list.component';
import { SexoanimalCreateComponent } from './components/sexoanimal/sexoanimal-create/sexoanimal-create.component';
import { SexoanimalDeleteComponent } from './components/sexoanimal/sexoanimal-delete/sexoanimal-delete.component';
import { SexoanimalUpdateComponent } from './components/sexoanimal/sexoanimal-update/sexoanimal-update.component';
import { PropriedadeListComponent } from './components/propriedade/propriedade-list/propriedade-list.component';
import { PropriedadeCreateComponent } from './components/propriedade/propriedade-create/propriedade-create.component';
import { PropriedadeDeleteComponent } from './components/propriedade/propriedade-delete/propriedade-delete.component';
import { PropriedadeUpdateComponent } from './components/propriedade/propriedade-update/propriedade-update.component';
import { AssinanteListComponent } from './components/assinante/assinante-list/assinante-list.component';
import { AssinanteCreateComponent } from './components/assinante/assinante-create/assinante-create.component';
import { AssinanteDeleteComponent } from './components/assinante/assinante-delete/assinante-delete.component';
import { AssinanteUpdateComponent } from './components/assinante/assinante-update/assinante-update.component';
import { MateriaprimaListComponent } from './components/materiaprima/materiaprima-list/materiaprima-list.component';
import { MateriaprimaCreateComponent } from './components/materiaprima/materiaprima-create/materiaprima-create.component';
import { MateriaprimaDeleteComponent } from './components/materiaprima/materiaprima-delete/materiaprima-delete.component';
import { MateriaprimaUpdateComponent } from './components/materiaprima/materiaprima-update/materiaprima-update.component';
import { RacaListComponent } from './components/raca/raca-list/raca-list.component';
import { RacaCreateComponent } from './components/raca/raca-create/raca-create.component';
import { RacaUpdateComponent } from './components/raca/raca-update/raca-update.component';
import { RacaDeleteComponent } from './components/raca/raca-delete/raca-delete.component';
import { TipofornecedorListComponent } from './components/tipofornecedor/tipofornecedor-list/tipofornecedor-list.component';
import { TipofornecedorCreateComponent } from './components/tipofornecedor/tipofornecedor-create/tipofornecedor-create.component';
import { TipofornecedorDeleteComponent } from './components/tipofornecedor/tipofornecedor-delete/tipofornecedor-delete.component';
import { TipofornecedorUpdateComponent } from './components/tipofornecedor/tipofornecedor-update/tipofornecedor-update.component';
import { RegimeengordaCreateComponent } from './components/regimeengorda/regimeengorda-create/regimeengorda-create.component';
import { RegimeengordaDeleteComponent } from './components/regimeengorda/regimeengorda-delete/regimeengorda-delete.component';
import { RegimeengordaUpdateComponent } from './components/regimeengorda/regimeengorda-update/regimeengorda-update.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { FornecedorListComponent } from './components/fornecedor/fornecedor-list/fornecedor-list.component';
import { FornecedorUpdateComponent } from './components/fornecedor/fornecedor-update/fornecedor-update.component';
import { FornecedorCreateComponent } from './components/fornecedor/fornecedor-create/fornecedor-create.component';
import { FuncionarioListComponent } from './components/funcionario/funcionario-list/funcionario-list.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { PerfilDialogComponent } from './components/modals/perfil-dialog/perfil-dialog.component';
import { RacaoCreateComponent } from './components/racao/racao-create/racao-create.component';
import { RacaoListComponent } from './components/racao/racao-list/racao-list.component';
import { RacaoUpdateComponent } from './components/racao/racao-update/racao-update.component';
import { FormulaCreateComponent } from './components/racao/formula/formula-create/formula-create.component';
import { OrdemProducaoCreateComponent } from './components/ordemProducao/ordem-producao-create/ordem-producao-create.component';
import { OrdemProducaoListComponent } from './components/ordemProducao/ordem-producao-list/ordem-producao-list.component';
import { LoteProducaoCreateComponent } from './components/loteProducao/lote-producao-create/lote-producao-create.component';
import { CurralpiqueteCreateComponent } from './components/curralpiquete/curralpiquete-create/curralpiquete-create.component';
import { CurralpiqueteUpdateComponent } from './components/curralpiquete/curralpiquete-update/curralpiquete-update.component';
import { CurralpiqueteListComponent } from './components/curralpiquete/curralpiquete-list/curralpiquete-list.component';
import { CurralpiqueteDeleteComponent } from './components/curralpiquete/curralpiquete-delete/curralpiquete-delete.component';
import { LoteCreateComponent } from './components/lote/lote-create/lote-create.component';
import { LoteUpdateComponent } from './components/lote/lote-update/lote-update.component';
import { LoteListComponent } from './components/lote/lote-list/lote-list.component';
import { LoteDeleteComponent } from './components/lote/lote-delete/lote-delete.component';
import { MovimentacaoDialogComponent } from './components/modals/movimentacao-dialog/movimentacao-dialog.component';

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
    MovimentacaoDialogComponent
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
    MatExpansionModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
