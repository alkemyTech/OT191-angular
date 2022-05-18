import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-backoffice-home",
	templateUrl: "./backoffice-home.component.html",
	styleUrls: ["./backoffice-home.component.scss"],
})
export class BackofficeHomeComponent {
	constructor(private router: Router) {}

	urlBase = this.router.url;
	elements: string[] = [
		"actividades",
		"categorias",
		"organizacion",
		"slides",
		"home",
		"usuarios",
	];
	elementsUrl: string[] = [
		this.urlBase + "/activities",
		this.urlBase + "/categories",
		this.urlBase + "/organization",
		this.urlBase + "/slides",
		this.urlBase + "/home",
		this.urlBase + "/users",
	];
}
