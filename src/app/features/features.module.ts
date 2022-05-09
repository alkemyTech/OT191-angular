import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CurrencyPipe } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from "../core/utils/material/material.module";
import { PrimengModule } from "../core/utils/primeng/primeng.module";

import { AppRoutingModule } from "./app-routing.module";

import { PublicModule } from "./public/public.module";

import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
	declarations: [],
	exports: [RouterModule],
	imports: [
		CommonModule,
		AppRoutingModule,
		RouterModule,
		PrimengModule,
		MaterialModule,
		SharedModule,
		MatDialogModule,
	],
})
export class FeaturesModule {}
