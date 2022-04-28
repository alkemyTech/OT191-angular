import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories/categories.component";
import { EditOrganizationComponent } from "./edit-organization/edit-organization.component";
import { HomeEditComponent } from "./pages/home-edit/home-edit.component";
import { ShowSlidesComponent } from "./pages/show-slides/show-slides.component";
import { SlidesComponent } from "./pages/slides/slides.component";

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
        path:"slides",
        component: ShowSlidesComponent
      },
      {
        path: "slides/create",
        component: SlidesComponent,
      },
      {
        path: "home",
        component: HomeEditComponent,
      },
      {
        path: "",
        redirectTo: "",
        pathMatch: "full",
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
