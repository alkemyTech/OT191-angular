import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

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
    path: "donar",
    component: DonationsComponent,
  },
  {
    path: "gracias",
    component: GraciasComponent,
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
