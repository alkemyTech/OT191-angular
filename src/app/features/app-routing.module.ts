import { Component, NgModule } from "@angular/core";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { UserformComponent } from "./backoffice/pages/userform/userform.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";


import { EditOrganizationComponent } from "./backoffice/edit-organization/edit-organization.component";
import { FormcontactComponent } from "./public/formcontact/formcontact.component";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { DonationsComponent } from "./public/pages/donations/donations.component";
import { HomeComponent } from "./public/pages/home/home.component";
import { GraciasComponent } from "./public/pages/donations/gracias/gracias.component";


const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
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
    path: "backoffice/userform",
    component: UserformComponent
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
export const routingComponents = [SlidesComponent,UserformComponent];
