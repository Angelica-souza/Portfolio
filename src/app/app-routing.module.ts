import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProjetosComponent } from './views/projetos/projetos.component';
import { ContatoComponent } from './views/contato/contato.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Arquivo de rotas