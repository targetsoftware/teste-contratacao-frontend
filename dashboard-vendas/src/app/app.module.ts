import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { TotalLojasComponent } from './vendas/total-lojas/total-lojas.component';
import { TotalProdutosComponent } from './vendas/total-produtos/total-produtos.component';
import { TotalVendedoresComponent } from './vendas/total-vendedores/total-vendedores.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    TotalLojasComponent,
    TotalProdutosComponent,
    TotalVendedoresComponent,
    SpinnerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacaoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
