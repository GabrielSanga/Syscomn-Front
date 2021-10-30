import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssinanteCreateComponent } from './components/assinante/assinante-create/assinante-create.component';
import { AssinanteDeleteComponent } from './components/assinante/assinante-delete/assinante-delete.component';
import { AssinanteListComponent } from './components/assinante/assinante-list/assinante-list.component';
import { AssinanteUpdateComponent } from './components/assinante/assinante-update/assinante-update.component';
import { EstadoanimalCreateComponent } from './components/estadoaninal/estadoanimal-create/estadoanimal-create.component';
import { EstadoanimalDeleteComponent } from './components/estadoaninal/estadoanimal-delete/estadoanimal-delete.component';
import { EstadoanimalListComponent } from './components/estadoaninal/estadoanimal-list/estadoanimal-list.component';
import { EstadoanimalUpdateComponent } from './components/estadoaninal/estadoanimal-update/estadoanimal-update.component';
import { HomeComponent } from './components/home/home.component';
import { LocalarmazenamentoCreateComponent } from './components/localarmazenamento/localarmazenamento-create/localarmazenamento-create.component';
import { LocalarmazenamentoDeleteComponent } from './components/localarmazenamento/localarmazenamento-delete/localarmazenamento-delete.component';
import { LocalarmazenamentoListComponent } from './components/localarmazenamento/localarmazenamento-list/localarmazenamento-list.component';
import { LocalarmazenamentoUpdateComponent } from './components/localarmazenamento/localarmazenamento-update/localarmazenamento-update.component';
import { MateriaprimaCreateComponent } from './components/materiaprima/materiaprima-create/materiaprima-create.component';
import { MateriaprimaDeleteComponent } from './components/materiaprima/materiaprima-delete/materiaprima-delete.component';
import { MateriaprimaListComponent } from './components/materiaprima/materiaprima-list/materiaprima-list.component';
import { MateriaprimaUpdateComponent } from './components/materiaprima/materiaprima-update/materiaprima-update.component';
import { NavComponent } from './components/nav/nav.component';
import { SexoanimalCreateComponent } from './components/sexoanimal/sexoanimal-create/sexoanimal-create.component';
import { SexoanimalDeleteComponent } from './components/sexoanimal/sexoanimal-delete/sexoanimal-delete.component';
import { SexoanimalListComponent } from './components/sexoanimal/sexoanimal-list/sexoanimal-list.component';
import { SexoanimalUpdateComponent } from './components/sexoanimal/sexoanimal-update/sexoanimal-update.component';
import { TipomorteCreateComponent } from './components/tipomorte/tipomorte-create/tipomorte-create.component';
import { TipomorteDeleteComponent } from './components/tipomorte/tipomorte-delete/tipomorte-delete.component';
import { TipomorteListComponent } from './components/tipomorte/tipomorte-list/tipomorte-list.component';
import { TipomorteUpdadeComponent } from './components/tipomorte/tipomorte-updade/tipomorte-updade.component';

const routes: Routes = [
 {
   path: '', component: NavComponent, children:[
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
    
    {  path: 'materiaprima', component: MateriaprimaListComponent},
    {  path: 'materiaprima/create', component: MateriaprimaCreateComponent},
    {  path: 'materiaprima/update/:idMateriaPrima', component: MateriaprimaUpdateComponent},
    {  path: 'materiaprima/delete/:idMateriaPrima', component: MateriaprimaDeleteComponent},

    {  path: 'assinante', component: AssinanteListComponent},
    {  path: 'assinante/create', component: AssinanteCreateComponent},
    {  path: 'assinante/update/:idAssinante', component: AssinanteUpdateComponent},
    {  path: 'assinante/delete/:idAssinante', component: AssinanteDeleteComponent},
   ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
