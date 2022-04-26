import { Component, Input } from "@angular/core";

@Component({
	selector: "app-principal",
	templateUrl: "./principal.component.html",
	styleUrls: ["./principal.component.scss"],
})
export class PrincipalComponent {
	constructor() {}

	@Input() text: string = "";
}
