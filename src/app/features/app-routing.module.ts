import { RouterModule, Routes } from "@angular/router";
import { SlidesComponent } from "./backoffice/pages/slides/slides.component";
import { HomeComponent } from "./public/pages/home/home.component";
import { FormcontactComponent } from "./public/formcontact/formcontact.component";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "actividades",
    component: ActivityFormComponent,
  },
  {
    path: "backoffice/slides",
    component: SlidesComponent,
  },
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "public/contact",
    component: FormcontactComponent,
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
