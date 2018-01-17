import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrcamentosClientesComponent } from './orcamentos-clientes/orcamentos-clientes.component';
import { VisualizarClientesComponent } from './visualizar-clientes/visualizar-clientes.component';
import { LoginComponent } from './login/login.component';
import { CadastroProdutosServicosComponent } from './cadastro-produtos-servicos/cadastro-produtos-servicos.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'cadastro-produtos-servicos',
    component: CadastroProdutosServicosComponent
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
