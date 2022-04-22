import { CategoriesComponent } from "./categories/categories.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PrimengModule } from "../../core/utils/primeng/primeng.module";
import { SharedModule } from "../../shared/shared.module";
import { ActivitiesComponent } from "./activities/activities.component";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { SlidesComponent } from "./pages/slides/slides.component";
import { EditOrganizationComponent } from "./edit-organization/edit-organization.component";
import { BackofficeRoutingModule } from "./backoffice-routing.module";
import { HomeEditComponent } from "./pages/home-edit/home-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [
		CategoriesComponent,
		ActivitiesComponent,
		SlidesComponent,
		HomeEditComponent,
		EditOrganizationComponent,
	],
	imports: [
		CommonModule,
		PrimengModule,
		SharedModule,
		ReactiveFormsModule,
		FormsModule,
		CKEditorModule,
		BackofficeRoutingModule,
	],
})
export class BackofficeModule {}
