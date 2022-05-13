import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormcontactComponent } from "./pages/formcontact/formcontact.component";
import { DonationsComponent } from "./pages/donations/donations.component";
import { GraciasComponent } from "./pages/donations/gracias/gracias.component";
import { PrincipalComponent } from "src/app/About/principal/principal.component";
import { JuguetesComponent } from "./pages/campaigns/juguetes/juguetes.component";

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
				path: "juguetes",
				component: JuguetesComponent,
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
