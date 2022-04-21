import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PrimengModule } from "../../core/utils/primeng/primeng.module";
import { ActivitiesComponent } from "./activities/activities.component";
import { SlidesComponent } from "./pages/slides/slides.component";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { CreationNewsComponent } from "./pages/creation-news/creation-news.component";

@NgModule({
  declarations: [ActivitiesComponent, SlidesComponent, CreationNewsComponent],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,
  ],
})
export class BackofficeModule {}
