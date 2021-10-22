import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/view/home/home.component';
import { HospedagemListComponent } from './components/view/hospedagem/list/list.component';
import { HospedagemFormComponent } from './components/view/hospedagem/form/form.component';
import { HospedagemUpdateComponent } from './components/view/hospedagem/update/update.component';
import { HospedeFormComponent } from './components/view/hospede/form/hospede-form.component';
import { HospedeUpdateComponent } from './components/view/hospede/update/hospede-update.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'hospedes', component: HospedagemListComponent},
  {path: 'hospedes/form', component: HospedeFormComponent},
  {path: 'hospedes/:id', component: HospedeUpdateComponent},
  {path: 'hospedagens', component: HospedagemListComponent},
  {path: 'hospedagens/form', component: HospedagemFormComponent},
  {path: 'hospedagens/:id', component: HospedagemUpdateComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
