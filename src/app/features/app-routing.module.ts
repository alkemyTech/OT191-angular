import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CreationNewsComponent } from "./backoffice/pages/creation-news/creation-news.component";

const routes: Routes = [
  {
    path: "new",
    component: CreationNewsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
