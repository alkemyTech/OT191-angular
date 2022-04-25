import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EditOrganizationComponent } from "./backoffice/edit-organization/edit-organization.component";
import { ActivitiesListComponent } from "./backoffice/activities-list/activities-list.component";
import { ActivitiesComponent } from "./backoffice/activities/activities.component";
import { FormcontactComponent } from "./public/formcontact/formcontact.component";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { DonationsComponent } from "./public/pages/donations/donations.component";
import { HomeComponent } from "./public/pages/home/home.component";
import { GraciasComponent } from "./public/pages/donations/gracias/gracias.component";
import { CategoriesComponent } from "./backoffice/categories/categories.component";


const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
	{
		path: "categories",
		component: CategoriesComponent,
	},
  {
    path: "donar",
    component: DonationsComponent,
  },
  {
    path: "gracias",
    component: GraciasComponent,
  },
  {
    path: "backoffice/organization/edit",
    component: EditOrganizationComponent,
  },
  {
    path: "actividades",
    component: ActivityFormComponent,
  },
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "contact",
    component: FormcontactComponent,
  },
  {
    path: "backoffice/activities",
    component: ActivitiesListComponent,
  },
  {
    path: "backoffice/activities/create",
    component: ActivitiesComponent,
  },
  {
    path: 'backoffice',
    loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule)
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
