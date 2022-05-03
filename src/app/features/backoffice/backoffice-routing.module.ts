import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories/categories.component";
import { EditOrganizationComponent } from "./edit-organization/edit-organization.component";
import { HomeEditComponent } from "./pages/home-edit/home-edit.component";
import { SlidesComponent } from "./pages/slides/slides.component";
import { UserListViewComponent } from "./pages/user-list-view/user-list-view.component";
import { UserformComponent } from "./pages/userform/userform.component";

import { ActivitiesComponent } from "./activities/activities.component";
import { ActivitiesListComponent } from "./activities-list/activities-list.component";

const routes: Routes = [
	{
		path: "",
		children: [
			{ path: "" },
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
				path: "users",
				component: UserListViewComponent,
			},
			{
				path: "users/create",
				component: UserformComponent,
			},
			{
				path: "",
				redirectTo: "",
				pathMatch: "full",
			},
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
