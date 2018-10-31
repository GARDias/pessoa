import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [

	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{
		path: 'home',
		loadChildren: 'src/app/components/home/home.module#HomeModule'
	},
	{
		path: 'tipo-produto',
		loadChildren: 'src/app/components/tipoproduto/tipo-produto.module#TipoProdutoModule'
	}

];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
	exports: [RouterModule],
})
export class AppRoutingModule { }
