import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PrimengModule } from "../../core/utils/primeng/primeng.module";
import { SlidesComponent } from "./pages/slides/slides.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [SlidesComponent],
  imports: [CommonModule, PrimengModule, FormsModule, ReactiveFormsModule],
})
export class BackofficeModule {}
