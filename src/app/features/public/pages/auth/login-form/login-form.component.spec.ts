import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { Store, StoreModule } from "@ngrx/store";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { SharedModule } from "primeng/api";
import { AlertService } from "src/app/core/services/alert.service";
import { MaterialModule } from "src/app/core/utils/material/material.module";
import { PrimengModule } from "src/app/core/utils/primeng/primeng.module";
import { AuthService } from "../../../services/auth/auth.service";
import { ValidatorService } from "../../../services/auth/validators/validator.service";
import { AuthRoutingModule } from "../auth-routing.module";
import { RouterTestingModule } from "@angular/router/testing";
import { LoginFormComponent } from "./login-form.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BaseApiService } from "src/app/shared/services/base-api.service";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire/compat";
import { reducers } from "src/app/store";
import { By } from "@angular/platform-browser";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Observable, of } from "rxjs";

describe("LoginFormComponent", () => {
	let component: LoginFormComponent;
	let fixture: ComponentFixture<LoginFormComponent>;
	const formBuilder: FormBuilder = new FormBuilder();
	const auth = jasmine.createSpyObj("AuthService", ["login"]);

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LoginFormComponent],
			imports: [
				CommonModule,
				AuthRoutingModule,
				PrimengModule,
				MaterialModule,
				PrimengModule,
				FormsModule,
				ReactiveFormsModule,
				PdfViewerModule,
				SharedModule,
				RouterTestingModule,
				HttpClientModule,
				AngularFireModule.initializeApp(environment.firebase),
				StoreModule.forRoot(reducers),
				HttpClientTestingModule,
			],
			providers: [
				AlertService,
				FormBuilder,
				BaseApiService,
				ValidatorService,
				Store,
				HttpClient,
				AngularFireAuth,
				{ provide: AuthService, useValue: auth },
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
	it("should detect form is invalid", () => {
		component.loginForm.controls["email"].setValue("test");
		component.loginForm.controls["password"].setValue("");
		spyOn(component, "isInvalid").and.returnValue(true);
		fixture.detectChanges();

		const messageEmail =
			fixture.debugElement.nativeElement.querySelector("#errorEmail");
		const messagePassword =
			fixture.debugElement.nativeElement.querySelector("#errorPassword");
		expect(component.loginForm.status).toEqual("INVALID");
		expect(messageEmail.innerText.trim()).toEqual(
			"Correo electrónico inválido."
		);
		expect(messagePassword.innerText.trim()).toEqual(
			"Contraseña no debe estar vacía."
		);
	});

	it("should execute request HTTP and be successful", () => {
		component.loginForm.controls["email"].setValue("danielmedina012@gmail.com");
		component.loginForm.controls["password"].setValue("Alexander1!");
		fixture.detectChanges();
		const user = {
			email: component.loginForm.controls["email"].value,
			password: component.loginForm.controls["password"].value,
		};
		auth.login.and.returnValue(
			of({ success: true, data: "somevalue", message: "" })
		);
		expect(auth.login).toBeDefined();
	});

	it("should execute HTTP request and give error", () => {
		component.loginForm.controls["email"].setValue("danielmedina012@gmail.com");
		component.loginForm.controls["password"].setValue("Alexander1!");
		fixture.detectChanges();
		const user = {
			email: component.loginForm.controls["email"].value,
			password: component.loginForm.controls["password"].value,
		};
		auth.login.and.returnValue(
			of({ success: false, data: "somevalue", message: "" })
		);
		expect(auth.login).toBeDefined();
	});
});
