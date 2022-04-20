import { RouterModule, Routes } from "@angular/router";
import { SlidesComponent } from "./backoffice/pages/slides/slides.component";
import { HomeComponent } from "./public/pages/home/home.component";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EditionFormComponent } from "./backoffice/pages/edition-form/edition-form.component";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "edit",
    component: EditionFormComponent,
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
