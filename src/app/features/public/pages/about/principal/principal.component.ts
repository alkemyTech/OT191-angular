import { Component, Input } from "@angular/core";
import { OrganizationProviderService } from "src/app/features/backoffice/services/providers/orgnizationController/organization-provider.service";

@Component({
	selector: "app-principal",
	templateUrl: "./principal.component.html",
	styleUrls: ["./principal.component.scss"],
})
export class PrincipalComponent {
	text: string = "";
	welcome="";
	data = false;
	constructor(organizationService:OrganizationProviderService) {
		// setTimeout(() => {
		// 	this.data = true;
		// }, 1000);

		organizationService.getOrganization().subscribe((response)=>{
			this.text=response.long_description;
			this.welcome=response.welcome_text;
			}
		);
	}
}
