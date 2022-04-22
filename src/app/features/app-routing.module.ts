import { Component, NgModule } from "@angular/core";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { UserformComponent } from "./backoffice/pages/userform/userform.component";
import { RouterModule, Routes } from "@angular/router";
import { SlidesComponent } from "./backoffice/pages/slides/slides.component";
import { HomeComponent } from "./public/pages/home/home.component";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { CommonModule } from "@angular/common";


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
    path: "backoffice/userform",
    component: UserformComponent
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
export const routingComponents = [SlidesComponent,UserformComponent];
