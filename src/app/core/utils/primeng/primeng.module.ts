import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { CheckboxModule } from "primeng/checkbox";
import { DividerModule } from "primeng/divider";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputMaskModule } from "primeng/inputmask";
import { PasswordModule } from "primeng/password";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { RadioButtonModule } from "primeng/radiobutton";
import { RippleModule } from "primeng/ripple";
import { ProgressBarModule } from "primeng/progressbar";
import { TableModule } from "primeng/table";
import { VirtualScrollerModule } from "primeng/virtualscroller";
import { ImageModule } from "primeng/image";
import { DropdownModule } from "primeng/dropdown";
import { DialogModule } from "primeng/dialog";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { CarouselModule } from "primeng/carousel";
import { FileUploadModule } from "primeng/fileupload";
import { ConfirmDialogModule } from "primeng/confirmdialog";

@NgModule({
	exports: [
		ButtonModule,
		InputTextModule,
		InputTextareaModule,
		DropdownModule,
		ImageModule,
		InputMaskModule,
		RadioButtonModule,
		CheckboxModule,
		RippleModule,
		ProgressSpinnerModule,
		PasswordModule,
		DividerModule,
		CardModule,
		ProgressBarModule,
		TableModule,
		VirtualScrollerModule,
		CarouselModule,
		ImageModule,
		DialogModule,
		ToastModule,
		ToolbarModule,
		FileUploadModule,
		ConfirmDialogModule,
	],
})
export class PrimengModule {}
