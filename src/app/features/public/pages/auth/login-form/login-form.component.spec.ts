import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { SharedModule } from "primeng/api";
import { AlertService } from "src/app/core/services/alert.service";
import { MaterialModule } from "src/app/core/utils/material/material.module";
import { PrimengModule } from "src/app/core/utils/primeng/primeng.module";
import { AuthEffects } from "src/app/store/auth/effects/auth.effects";
import { PublicRoutingModule } from "../../../public-routing.module";
import { AuthService } from "../../../services/auth/auth.service";
import { ValidatorService } from "../../../services/auth/validators/validator.service";
import { AuthRoutingModule } from "../auth-routing.module";
import { RouterTestingModule } from '@angular/router/testing';
import { LoginFormComponent } from "./login-form.component";
import { HttpClient } from "@angular/common/http";
import { BaseApiService } from "src/app/shared/services/base-api.service";

describe("LoginFormComponent", () => {
	let component: LoginFormComponent;
	let fixture: ComponentFixture<LoginFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LoginFormComponent],
			imports: [
				CommonModule,
				AuthRoutingModule,
				PrimengModule,
				MaterialModule,
				FormsModule,
				ReactiveFormsModule,
				PdfViewerModule,
				SharedModule,
        RouterTestingModule,
			],
			providers: [
				AlertService,
				FormBuilder,
				AuthService,
        HttpClient,
        BaseApiService,
				ValidatorService,
				Store,
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LoginFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
