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


// Componentes do Projeto
import { NavComponent } from './components/nav/nav.component';
import { TipomorteListComponent } from './components/tipomorte/tipomorte-list/tipomorte-list.component';
import { HomeComponent } from './components/home/home.component';
import { TipomorteCreateComponent } from './components/tipomorte/tipomorte-create/tipomorte-create.component';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { TipomorteUpdadeComponent } from './components/tipomorte/tipomorte-updade/tipomorte-updade.component';
import { TipomorteDeleteComponent } from './components/tipomorte/tipomorte-delete/tipomorte-delete.component';
import { LocalarmazenamentoListComponent } from './components/localarmazenamento/localarmazenamento-list/localarmazenamento-list.component';
import { LocalarmazenamentoCreateComponent } from './components/localarmazenamento/localarmazenamento-create/localarmazenamento-create.component';
import { LocalarmazenamentoUpdateComponent } from './components/localarmazenamento/localarmazenamento-update/localarmazenamento-update.component';
import { LocalarmazenamentoDeleteComponent } from './components/localarmazenamento/localarmazenamento-delete/localarmazenamento-delete.component';
import { EstadoanimalListComponent } from './components/estadoaninal/estadoanimal-list/estadoanimal-list.component';
import { EstadoanimalCreateComponent } from './components/estadoaninal/estadoanimal-create/estadoanimal-create.component';
import { EstadoanimalDeleteComponent } from './components/estadoaninal/estadoanimal-delete/estadoanimal-delete.component';
import { EstadoanimalUpdateComponent } from './components/estadoaninal/estadoanimal-update/estadoanimal-update.component';
import { RegimeengordaListComponent } from './components/regimeengorda/regimeengorda-list/regimeengorda-list.component';
import { SexoanimalListComponent } from './components/sexoanimal/sexoanimal-list/sexoanimal-list.component';
import { SexoanimalCreateComponent } from './components/sexoanimal/sexoanimal-create/sexoanimal-create.component';
import { SexoanimalDeleteComponent } from './components/sexoanimal/sexoanimal-delete/sexoanimal-delete.component';
import { SexoanimalUpdateComponent } from './components/sexoanimal/sexoanimal-update/sexoanimal-update.component';
import { MateriaprimaListComponent } from './components/materiaprima/materiaprima-list/materiaprima-list.component';
import { MateriaprimaCreateComponent } from './components/materiaprima/materiaprima-create/materiaprima-create.component';
import { MateriaprimaDeleteComponent } from './components/materiaprima/materiaprima-delete/materiaprima-delete.component';
import { MateriaprimaUpdateComponent } from './components/materiaprima/materiaprima-update/materiaprima-update.component';
import { AssinanteListComponent } from './components/assinante/assinante-list/assinante-list.component';
import { AssinanteCreateComponent } from './components/assinante/assinante-create/assinante-create.component';
import { AssinanteUpdateComponent } from './components/assinante/assinante-update/assinante-update.component';
import { AssinanteDeleteComponent } from './components/assinante/assinante-delete/assinante-delete.component';



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
    MateriaprimaListComponent,
    MateriaprimaCreateComponent,
    MateriaprimaDeleteComponent,
    MateriaprimaUpdateComponent,
    AssinanteListComponent,
    AssinanteCreateComponent,
    AssinanteUpdateComponent,
    AssinanteDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    
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
    NgxMaskModule.forRoot()  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
