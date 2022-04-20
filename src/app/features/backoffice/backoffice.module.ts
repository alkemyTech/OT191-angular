import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PrimengModule } from "../../core/utils/primeng/primeng.module";
import { CreationNewsComponent } from "./pages/creation-news/creation-news.component";
import { SlidesComponent } from "./pages/slides/slides.component";

@NgModule({
  declarations: [SlidesComponent, CreationNewsComponent],
  imports: [CommonModule, PrimengModule, FormsModule, ReactiveFormsModule],
})
export class BackofficeModule {}
