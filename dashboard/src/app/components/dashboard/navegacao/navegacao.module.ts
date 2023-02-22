import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ConteudoComponent } from './conteudo/conteudo.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    ConteudoComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ConteudoComponent,
    FooterComponent,
    MenuComponent
  ]
})
export class NavegacaoModule { }
