import { Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { reducers } from 'src/app/store';
import { AuthState } from 'src/app/core/models/auth.state';


@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
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

  public activePage = window.location.pathname;
  

  public campaign = true;
  authLogin$: any;
  constructor( private store:Store<{auth: AuthState}>) {
    this.authLogin$ = store.select((state)=>state.auth);
  }

  ngOnInit(): void {
    console.log(this.authLogin$)
  }

 
  
}
