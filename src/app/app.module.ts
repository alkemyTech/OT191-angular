import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { ConfirmationService, MessageService } from "primeng/api";
import { environment } from "src/environments/environment";
import { AppComponent } from "./app.component";
import { reducers } from "./store";
import { AboutModule } from "./features/public/pages/about/about.module";
import { CoreModule } from "./core/core.module";
import { FeaturesModule } from "./features/features.module";
import { SharedModule } from "./shared/shared.module";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth/";
import { activityEffects } from "./store/activities/effects/activity.effects";
import { SlideEffects } from "./store/slides/effects/slide.effects";


@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CoreModule,
		FeaturesModule,
		SharedModule,
		AboutModule,
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25, // Retains last 25 states
			logOnly: environment.production, // Restrict extension to log-only mode
		}),
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		EffectsModule.forRoot([activityEffects, SlideEffects]),
	],
	providers: [ConfirmationService, MessageService],
	bootstrap: [AppComponent],
})
export class AppModule {}
