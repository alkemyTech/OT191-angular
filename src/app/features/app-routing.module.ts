import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./backoffice/categories/categories.component";
import { SlidesComponent } from "./backoffice/pages/slides/slides.component";
import { HomeComponent } from "./public/pages/home/home.component";

const routes: Routes = [
  { 
    path: "actividades", 
    component: ActivityFormComponent
  },
  { 
    path: "categories", 
    component: CategoriesComponent
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
    redirectTo: "actividades",
    pathMatch: "full",
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
export const routingComponents = [SlidesComponent];
