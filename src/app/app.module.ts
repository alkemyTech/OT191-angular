import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { environment } from "src/environments/environment";
import { AppComponent } from "./app.component";
import { reducers } from "./store";
import { AboutModule } from "./features/public/pages/about/about.module";
import { CoreModule } from "./core/core.module";
import { FeaturesModule } from "./features/features.module";
import { SharedModule } from "./shared/shared.module";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth/";
import { activityEffects } from "./store/activities/effects/activity.effects";
import { SlideEffects } from "./store/slides/effects/slide.effects";
import {
	AngularFirestoreModule,
} from "@angular/fire/compat/firestore";
import { MessageService } from "primeng/api";
import localeEs from '@angular/common/locales/es-AR'
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEs, 'es-AR')
@NgModule({
	declarations: [AppComponent],
	providers: [MessageService, {provide: LOCALE_ID, useValue:'es-AR'}],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CoreModule,
		FeaturesModule,
		SharedModule,
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25, // Retains last 25 states
			logOnly: environment.production, // Restrict extension to log-only mode
		}),
		AngularFireModule.initializeApp(environment.firebase),
		EffectsModule.forRoot([activityEffects, SlideEffects]),
		AngularFirestoreModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
