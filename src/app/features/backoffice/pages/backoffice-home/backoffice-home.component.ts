import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-backoffice-home",
  templateUrl: "./backoffice-home.component.html",
  styleUrls: ["./backoffice-home.component.scss"],
})
export class BackofficeHomeComponent {
  constructor(private router: Router) {}

  public backofficeRoute = [
    { name: "actividades", url: "/backoffice/activities", img:"../../../../../assets/svg/activities.svg" },
    { name: "categorias", url: "/backoffice/categories", img:"../../../../../assets/svg/categories.svg" },
	{ name: "slides", url: "/backoffice/slides", img:"../../../../../assets/svg/slides.svg" },
	{ name: "organización", url: "/backoffice/organization", img:"../../../../../assets/svg/organization.svg" },
	{ name: "home edition", url: "/backoffice/home", img:"../../../../../assets/svg/home.svg" },
	{ name: "usuarios", url: "/backoffice/users", img:"../../../../../assets/svg/users.svg" },
  ];

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
