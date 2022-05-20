import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Store } from "@ngrx/store";
import { ConfirmationService, MessageService } from "primeng/api";

import { ActivitiesListComponent } from "./activities-list.component";

describe("ActivitiesListComponent", () => {
	let component: ActivitiesListComponent;
	let fixture: ComponentFixture<ActivitiesListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ActivitiesListComponent],
			providers: [MessageService, ConfirmationService, Store],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ActivitiesListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
