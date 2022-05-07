import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./pages/categories/categories.component";
import { HomeEditComponent } from "./pages/home-edit/home-edit.component";
import { ShowSlidesComponent } from "./pages/show-slides/show-slides.component";
import { SlidesComponent } from "./pages/slides/slides.component";
import { UserListViewComponent } from "./pages/user-list-view/user-list-view.component";
import { UserformComponent } from "./pages/userform/userform.component";
import { ActivitiesListComponent } from "./pages/activities-list/activities-list.component";
import { ActivitiesComponent } from "./pages/activities/activities.component";
import { EditOrganizationComponent } from "./components/edit-organization/edit-organization.component";

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
				component: ShowSlidesComponent,
			},
			{
				path:"slides/create",
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
				path: "",
				redirectTo: "",
				pathMatch: "full",
			},
			{
				path: "**",
				redirectTo: "",
			}
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class BackofficeRoutingModule {}
