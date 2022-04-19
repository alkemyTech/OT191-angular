import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PrimengModule } from "../core/utils/primeng/primeng.module";
import { RouterModule } from "@angular/router";
import { BackofficeModule } from "./backoffice/backoffice.module";

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    PrimengModule,
    BackofficeModule,
  ],
})
export class FeaturesModule {}
