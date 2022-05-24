import {
	Component,
	ElementRef,
	EventEmitter,
	HostBinding,
	Input,
	OnChanges,
	OnInit,
	Output,
	Renderer2,
	SimpleChanges,
	ViewChild,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { AuthService } from "src/app/features/public/services/auth/auth.service";
import { AppState } from "src/app/store";
import { selectAuthLoading } from "src/app/store/slides/selectors/slides.selector";

@Component({
	selector: "app-sidebar-shared",
	templateUrl: "./sidebar.component.html",
	styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent {
	loggedIn: boolean = localStorage.getItem("token") == undefined ? false : true;
	panelOpenState = false;
	public campaign = true;
	authLogin$: any;
	loginState!: any;
	flag = false;
	public activePage = window.location.pathname;
	private dropdownMenu!: ElementRef;
	items: { name: string; url: string; campaign: boolean; }[] = [];
	campaigns: { name: string; url: string; campaign: boolean }[]=[];
	constructor(
		private store: Store<AppState>,
		private renderer: Renderer2,
		private authService: AuthService
	) {
		this.authLogin$ = this.store.select(selectAuthLoading);
	}

	@Input() elements: { name: string; url: string; campaign: boolean }[] = [];
	@Input() display: boolean = false;
	@Output() displayEvent = new EventEmitter<boolean>();

	sendEvent() {
		if (this.display == false) {
			this.displayEvent.emit(this.display);
		}
	}
	logOut() {
		localStorage.clear();
	}

	isLogged() {
		return localStorage.getItem("token") != undefined;
	}
	ngOnInit(): void {
		this.authService.verifyAuth().subscribe((res) => {
			this.loggedIn = res.success;
		});
		this.items=this.elements.filter(e=>e.campaign==false)
		this.campaigns=this.elements.filter(e=>e.campaign==true)
	}

	@ViewChild("dropdownMenu", { static: false }) set content(
		content: ElementRef
	  ) {
		if (content) {
		  // initially setter gets called with undefined
		  this.dropdownMenu = content;
		}
	  }
	@ViewChild("menuButton", { static: false }) menuButton?: ElementRef;
}
