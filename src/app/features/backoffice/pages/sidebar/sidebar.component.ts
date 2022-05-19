import { Component, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
	selector: "app-sidebar",
	templateUrl: "./sidebar.component.html",
	styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent{
	constructor() {}

	@Input() elements: string[] = [];
	@Input() elementsUrl: string[] = [];
	@Input() display: boolean = false;
  	@Output() displayEvent = new EventEmitter<boolean>();
  sendEvent(){
    if (this.display==false){
      this.displayEvent.emit(this.display);
    }

  }
}
