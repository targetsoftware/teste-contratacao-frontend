import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConteudoComponent } from './components/dashboard/navegacao/conteudo/conteudo.component';
import { PainelEstadosComponent } from './components/dashboard/painel-estados/painel-estados.component';
import { PainelProdutosComponent } from './components/dashboard/painel-produtos/painel-produtos.component';
import { PainelPrincipalComponent } from './components/dashboard/painel-vendedores/painel-principal.component';
import { CadastroComponent } from './components/user/cadastro/cadastro.component';
import { LoginComponent } from './components/user/login/login.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'cadastro', component: CadastroComponent }
    ],

  },

  { path: '', redirectTo: '/lojas', pathMatch: 'full'},
  { path: 'estado', component: PainelEstadosComponent},
  { path: 'vendedor', component: PainelPrincipalComponent},
  { path: 'produto', component: PainelProdutosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
