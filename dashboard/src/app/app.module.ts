import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLoadingButtonsModule } from 'ngx-loading-buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { CadastroComponent } from './components/user/cadastro/cadastro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PainelPrincipalComponent } from './components/dashboard/painel-vendedores/painel-principal.component';
import { PainelEstadosComponent } from './components/dashboard/painel-estados/painel-estados.component';
import { FormsModule } from '@angular/forms';
import { NavegacaoModule } from './components/dashboard/navegacao/navegacao.module';
import { PainelProdutosComponent } from './components/dashboard/painel-produtos/painel-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    CadastroComponent,
    DashboardComponent,
    PainelPrincipalComponent,
    PainelEstadosComponent,
    PainelProdutosComponent,

  ],
  imports: [
    NavegacaoModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxLoadingButtonsModule,
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
