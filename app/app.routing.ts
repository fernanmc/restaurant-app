import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RestauranteListComponent} from "./component/restaurantes-list.component";
import {RestauranteDetailComponent} from "./component/restaurante-detail.component";
import {RestauranteAddComponent} from "./component/restaurante-add.component";
import {RestauranteEditComponent} from "./component/restaurante-edit.component";

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	},
	{path: "", component: RestauranteListComponent},
	{path: "restaurante/:id", component: RestauranteDetailComponent},
	{path: "crear-restaurante", component: RestauranteAddComponent},
	{path: "editar-restaurante/:id", component: RestauranteEditComponent},
	{path: "donde-como-hoy/:random", component: RestauranteDetailComponent},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);