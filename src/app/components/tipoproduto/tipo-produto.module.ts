import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TipoProdutoRoutingModule } from './tipo-produto.routing.module';
import { TipoProdutoFormComponent } from './form/tipo-produto-form.component';
import { TipoProdutoListComponent } from './list/tipo-produto-list.component';
import { SharedModule } from '../../shared/shared.module';
import { AppBootstrapModule } from '../app-bootstrap.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TipoProdutoRoutingModule,

    AppBootstrapModule,
    SharedModule
  ],
  declarations: [TipoProdutoFormComponent, TipoProdutoListComponent]
})
export class TipoProdutoModule { }
