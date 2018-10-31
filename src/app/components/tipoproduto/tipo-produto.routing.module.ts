import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { TipoProdutoFormComponent } from "./form/tipo-produto-form.component";
import { TipoProdutoListComponent } from "./list/tipo-produto-list.component";

export const tipoProdutoRoute: Routes = [
    {
        path: '',
        component: TipoProdutoListComponent,
        data: { title: 'Listagem de tipo produto' },
    },
    {
        path: 'create',
        component: TipoProdutoFormComponent,
        data: { title: 'Novo tipo de produto' }
    },
    {
        path: 'edit/:id',
        component: TipoProdutoFormComponent,
        data: { title: 'Editar tipo produto' }
    }
];

@NgModule({
	imports: [RouterModule.forChild(tipoProdutoRoute)],
	exports: [RouterModule],
})
export class TipoProdutoRoutingModule { }
