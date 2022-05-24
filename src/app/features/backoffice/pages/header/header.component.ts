import { Component, HostListener, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
	constructor(private router: Router) {}
	display:boolean=false;
	urlBase = environment.baseUrlBackoffice;
	elements: string[] = [
		"backoffice",
		"actividades",
		"categorias",
		"organizacion",
		"slides",
		"home",
		"usuarios",
	];
	elementsUrl: string[] = [
		this.urlBase,
		this.urlBase + "/activities",
		this.urlBase + "/categories",
		this.urlBase + "/organization/edit",
		this.urlBase + "/slides",
		this.urlBase + "/home",
		this.urlBase + "/users",
	];

	Display(){
		this.display=true;
	}

	receiveEvent($event:any) {
		this.display = $event
	  }
}
