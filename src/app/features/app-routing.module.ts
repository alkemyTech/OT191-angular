import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SlidesComponent } from "./backoffice/pages/slides/slides.component";
import { HomeComponent } from "./public/pages/home/home.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { UserformComponent } from "./backoffice/pages/userform/userform.component";

const routes: Routes = [
  {
    path: "actividades",
    component: ActivityFormComponent,
  },
  {
    path: "backoffice/slides",
    component: SlidesComponent,
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
    path: "**",
    redirectTo: "actividades",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
export const routingComponents = [SlidesComponent,UserformComponent];
