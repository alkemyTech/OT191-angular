import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-backoffice-home",
  templateUrl: "./backoffice-home.component.html",
  styleUrls: ["./backoffice-home.component.scss"],
})
export class BackofficeHomeComponent {
  constructor(private router: Router) {}

}
