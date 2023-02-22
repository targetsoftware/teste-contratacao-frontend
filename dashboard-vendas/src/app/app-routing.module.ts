import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { TotalLojasComponent } from './vendas/total-lojas/total-lojas.component';
import { TotalProdutosComponent } from './vendas/total-produtos/total-produtos.component';
import { TotalVendedoresComponent } from './vendas/total-vendedores/total-vendedores.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'lojas', component: TotalLojasComponent},
  { path: 'produtos', component: TotalProdutosComponent},
  { path: 'vendedores', component: TotalVendedoresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
