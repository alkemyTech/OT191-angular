import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PrimengModule } from "../core/utils/primeng/primeng.module";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    PrimengModule,
    ReactiveFormsModule,
  ],
})
export class FeaturesModule {}
