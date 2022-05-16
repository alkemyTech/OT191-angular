import { Component, HostListener, Input, OnInit } from "@angular/core";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
	constructor() {}
	@Input() sidebar!: SidebarComponent;

	@HostListener('click')
	click(){
		this.sidebar.toggle()
	}
}
