import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HospedeListComponent } from './components/view/hospede/hospede-list/hospede-list.component';
import { HomeComponent } from './components/view/home/home.component';
import { HospedagemListComponent } from './components/view/hospedagem/hospedagem-list/hospedagem-list.component';
import { HospedeFormComponent } from './components/view/hospede/hospede-form/hospede-form.component';
import { HospedagemFormComponent } from './components/view/hospedagem/hospedagem-form/hospedagem-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'hospedes', component: HospedeListComponent},
  {path: 'hospedes/form', component: HospedeFormComponent},
  {path: 'hospedagens', component: HospedagemListComponent},
  {path: 'hospedagens/form', component: HospedagemFormComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
