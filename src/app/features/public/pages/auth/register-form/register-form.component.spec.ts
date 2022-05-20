import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { SharedModule } from "primeng/api";
import { MaterialModule } from "src/app/core/utils/material/material.module";
import { PrimengModule } from "src/app/core/utils/primeng/primeng.module";
import { AuthEffects } from "src/app/store/auth/effects/auth.effects";
import { AuthRoutingModule } from "../auth-routing.module";

import { RegisterFormComponent } from "./register-form.component";

describe("RegisterFormComponent", () => {
	let component: RegisterFormComponent;
	let fixture: ComponentFixture<RegisterFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RegisterFormComponent],
			imports: [
				CommonModule,
				AuthRoutingModule,
				PrimengModule,
				MaterialModule,
				FormsModule,
				ReactiveFormsModule,
				PdfViewerModule,
				SharedModule,
				EffectsModule.forFeature([AuthEffects]),
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RegisterFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
