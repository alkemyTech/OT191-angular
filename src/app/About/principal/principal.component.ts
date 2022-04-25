import { Component, Input } from '@angular/core';

@Component({
	selector: "app-principal",
	templateUrl: "./principal.component.html",
	styleUrls: ["./principal.component.scss"],
})
export class PrincipalComponent{

  constructor() { }

  @Input() text:string='Nosotros Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social. Uniendo las manos de todas las familias, las que viven en el barrio';

}
