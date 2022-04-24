import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "./core/core.module";
import { FeaturesModule } from "./features/features.module";
import { NgModule } from "@angular/core";
import { SharedModule } from "./shared/shared.module";
import { AboutModule } from "./About/about.module";
import { ConfirmationService, MessageService } from "primeng/api";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, BrowserAnimationsModule, CoreModule, FeaturesModule, SharedModule, AboutModule],
	providers: [ConfirmationService, MessageService],
	bootstrap: [AppComponent],
})
export class AppModule {}
