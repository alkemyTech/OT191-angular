import { Component, Input, OnInit } from '@angular/core';
import { RouterPublicI } from 'src/app/core/models/routing-public.module';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  public routerList = [
    {
      name: "Inicio",
      url: "",
      campaign: false,
    },
    {
      name: "Contacto",
      url: "/contact",
      campaign: false,
    },
    {
      name:"Nosotros",
      url: "/nosotros",
      campaign: false,
    },
    {
      name:"Contribuye",
      url: "/donar",
      campaign: false,
    },
    {
      name:"Juguete",
      url: "/juguetes",
      campaign: true,
    },
    {
      name:"Útiles Escolares",
      url: "/utiles",
      campaign: true,
    }
  ];

  public campaign = true;

  constructor() {}

  ngOnInit(): void {
    console.log(this.routerList);
  }
}
