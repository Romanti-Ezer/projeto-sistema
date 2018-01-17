import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrcamentosClientesComponent } from './orcamentos-clientes/orcamentos-clientes.component';
import { VisualizarClientesComponent } from './visualizar-clientes/visualizar-clientes.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'orcamentos-clientes',
    component: OrcamentosClientesComponent
  },

  {
    path: 'visualizar-clientes',
    component: VisualizarClientesComponent
  },

  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
