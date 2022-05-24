import {
	Component,
} from "@angular/core";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {


	public routerList = [
		{
			name: "Inicio",
			url: "/",
			campaign: false,
		},
		{
			name: "Contacto",
			url: "/contact",
			campaign: false,
		},
		{
			name: "Nosotros",
			url: "/nosotros",
			campaign: false,
		},
		{
			name: "Contribuye",
			url: "/donar",
			campaign: false,
		},
		{
			name: "Juguete",
			url: "/juguetes",
			campaign: true,
		},
		{
			name: "Útiles Escolares",
			url: "/utiles",
			campaign: true,
		},
	];
	
	display:boolean=false;

	receiveEvent($event: any) {
		this.display = $event;
	}


	Display(){
		this.display=true;
	}

}
// 	constructor(private router: Router) {}
// 	urlBase = environment.baseUrlBackoffice;
// 	elements: string[] = [
// 		"actividades",
// 		"categorias",
// 		"organizacion",
// 		"slides",
// 		"home",
// 		"usuarios",
// 	];
// 	elementsUrl: string[] = [
// 		this.urlBase + "/activities",
// 		this.urlBase + "/categories",
// 		this.urlBase + "/organization",
// 		this.urlBase + "/slides",
// 		this.urlBase + "/home",
// 		this.urlBase + "/users",
// 	];




// }
