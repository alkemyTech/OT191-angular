import { Component, OnInit } from '@angular/core';
import { Observable,of } from 'rxjs';
import { IOrganization, Organization } from 'src/app/core/models/organization.model';
import { OrganizationProviderService } from 'src/app/features/backoffice/services/providers/orgnizationController/organization-provider.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  orgData: Organization = {id:                0,
    name:              "",
    logo:              "",
    short_description: "",
    long_description:  "",
    welcome_text:      "",
    address:           "",
    phone:             "",
    cellphone:         0 ,
    created_at:        "",
    updated_at:        "",
    deleted_at:        "",
    group_id:          0,
    facebook_url:      "",
    linkedin_url:      "",
    instagram_url:     "",
    twitter_url:       "",
  }
  

  data$!: Observable<Organization[]>  
  data:any;

  constructor(private OrgService:OrganizationProviderService) { }

  
  async getData(){
    let respuesta;
    await this.OrgService.getOrganization().toPromise().then((response) => {
      respuesta = response;
      this.orgData=response;
    }).catch(e => console.error(e));
    
    return respuesta;
  }

  
  ngOnInit(): void {
    this.getData();
    
  }

}
