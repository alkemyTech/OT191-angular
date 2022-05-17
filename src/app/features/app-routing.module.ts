import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./public/pages/home/home.component";
import { loginGuardian } from "./public/services/loginguardian/login-guardian-service";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
	},
	{
		path: "auth",
    canActivate: [loginGuardian],
		loadChildren: () =>
			import("./public/pages/auth/auth.module").then((m) => m.AuthModule),
	},
	{
		path: "backoffice",
		loadChildren: () =>
			import("./backoffice/backoffice.module").then((m) => m.BackofficeModule),
	},
	{
		path: "",
		loadChildren: () =>
			import("./public/public.module").then((m) => m.PublicModule),
	},
	{
		path: "**",
		redirectTo: "",
		pathMatch: "full",
	},
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
