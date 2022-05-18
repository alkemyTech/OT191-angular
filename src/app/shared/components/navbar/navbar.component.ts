import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Renderer2,
} from "@angular/core";

import { Store } from "@ngrx/store";
import { selectAuthLoading } from "src/app/store/slides/selectors/slides.selector";
import { AppState } from "src/app/store";

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
  flag = false;

  private dropdownMenu!: ElementRef;

  @ViewChild("dropdownMenu", { static: false }) set content(
    content: ElementRef
  ) {
    if (content) {
      // initially setter gets called with undefined
      this.dropdownMenu = content;
    }
  }
  @ViewChild("menuButton", { static: false }) menuButton?: ElementRef;

  openDropdown() {
    if (this.dropdownMenu.nativeElement.style.display == "block") {
      this.dropdownMenu.nativeElement.style.display = "none";
      this.flag = false;
    } else {
      this.dropdownMenu.nativeElement.style.display = "block";
      this.flag = true;
    }
  }

  public activePage = window.location.pathname;
  
  panelOpenState = false;
  public campaign = true;
  authLogin$: any;
  loginState!: any;
  
  constructor(
    private store:Store<AppState>,
    private renderer: Renderer2
  ) {
    this.authLogin$ = this.store.select(selectAuthLoading);

    
    
  }

  logOut(){
    localStorage.clear();
  }
  
  isLogged(){
    return localStorage.getItem("token") != undefined
  }
 

  ngOnInit(): void {
  }
}
