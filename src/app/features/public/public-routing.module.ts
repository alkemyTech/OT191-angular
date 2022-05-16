import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormcontactComponent } from "./pages/formcontact/formcontact.component";
import { DonationsComponent } from "./pages/donations/donations.component";
import { GraciasComponent } from "./pages/donations/gracias/gracias.component";
import { PrincipalComponent } from "./pages/about/principal/principal.component";
import { ActivityDetailComponent } from "./pages/activity-detail/activity-detail.component";

const routes: Routes = [
	{
		path: "",
		children: [
			{ path: "" },
			{
				path: "donar",
				component: DonationsComponent,
			},
			{ 
				path: "gracias",
				component: GraciasComponent,
			},
			{
				path: "contact",
				component: FormcontactComponent,
			},
			{
				path: "nosotros",
				component: PrincipalComponent,
			},
			{
				path: "activities/:id",
				component: ActivityDetailComponent,
			},
			{
				path: "",
				redirectTo: "",
				pathMatch: "full",
			},
			{
				path: "**",
				redirectTo: "",
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PublicRoutingModule {}
