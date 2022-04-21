import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PrimengModule } from "../core/utils/primeng/primeng.module";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BackofficeModule } from "./backoffice/backoffice.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
    BackofficeModule,
  ],
})
export class FeaturesModule {}
