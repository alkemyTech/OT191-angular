import { Component, OnInit } from '@angular/core';
import { OrganizationProviderService } from 'src/app/features/backoffice/services/providers/orgnizationController/organization-provider.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public welcomeong:string = ""

  products= [{name: "Prueba", description: "Alguna descripción"},{name: "Prueba", description: "Alguna descripción"},{name: "Prueba", description: "Alguna descripción"},{name: "Prueba", description: "Alguna descripción"}];

	responsiveOptions:any;

 text = "" 
 
	constructor(private organizationService: OrganizationProviderService) {
		this.responsiveOptions = [
            {
                breakpoint: '1278',
                numVisible: 2,
                numScroll: 2,
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

        organizationService.getOrganization().subscribe((response)=>{
          this.text=response.long_description;
          this.welcomeong=response.welcome_text;
          
          }
        );

        
	}

  
  ngOnInit() {
    
  }

}
