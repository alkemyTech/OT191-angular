import { Component, Input } from "@angular/core";

@Component({
	selector: "app-principal",
	templateUrl: "./principal.component.html",
	styleUrls: ["./principal.component.scss"],
})
export class PrincipalComponent {
	@Input() text: string = "";
	data = false;
	constructor() {
		setTimeout(() => {
			this.data = true;
		}, 1000);
	}
}
