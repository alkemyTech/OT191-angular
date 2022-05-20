import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public welcomeong:string = "Texto de bienvenida"

  products= [{name: "Prueba", description: "Alguna descripción"},{name: "Prueba", description: "Alguna descripción"},{name: "Prueba", description: "Alguna descripción"},{name: "Prueba", description: "Alguna descripción"}];

	responsiveOptions:any;

	constructor(private authService:AuthService) {
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}
  ngOnInit() {}

}
