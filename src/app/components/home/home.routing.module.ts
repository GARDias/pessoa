import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";

export const homeRoute: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: 'Home ABC' },
    }
];

@NgModule({
	imports: [RouterModule.forChild(homeRoute)],
	exports: [RouterModule],
})
export class HomeRoutingModule { }
