import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { PipesModule } from '../pipes/pipes.module';
import { ListagemProdutosComponent } from './listagem-produtos/listagem-produtos.component';
import { MantemProdutoComponent } from './mantem-produto/mantem-produto.component';

@NgModule({
  declarations: [
    ListagemProdutosComponent,
    MantemProdutoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    PipesModule,
  ],
  exports: [
    ListagemProdutosComponent,
    MantemProdutoComponent
  ]
})
export class ProdutoModule { }
