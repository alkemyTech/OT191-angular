import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivitiesListComponent } from "./activities-list/activities-list.component";
import { ActivitiesComponent } from "./activities/activities.component";
import { CategoriesComponent } from "./categories/categories.component";
import { EditOrganizationComponent } from "./edit-organization/edit-organization.component";
import { HomeEditComponent } from "./pages/home-edit/home-edit.component";
import { SlidesComponent } from "./pages/slides/slides.component";

const routes: Routes = [
	{
		path: "",
		children: [
			{ path: "" },
			{
				path: "activities/create",
				component: ActivitiesComponent,
			},
			{
				path: "activities/create/:id",
				component: ActivitiesComponent,
			},
			{
				path: "activities",
				component: ActivitiesListComponent,
			},
			{
				path: "categories",
				component: CategoriesComponent,
			},
			{
				path: "organization/edit",
				component: EditOrganizationComponent,
			},
			{
				path: "slides",
				component: SlidesComponent,
			},
			{
				path: "home",
				component: HomeEditComponent,
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
export class BackofficeRoutingModule {}
