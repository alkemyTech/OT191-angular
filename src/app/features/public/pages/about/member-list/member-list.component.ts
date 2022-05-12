import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { IMember } from "src/app/core/models/member.model";
import { DialogComponent } from "src/app/shared/components/dialog/dialog.component";
import { MembersService } from "../../../services/members/members.service";

@Component({
	selector: "app-member-list",
	templateUrl: "./member-list.component.html",
	styleUrls: ["./member-list.component.scss"],
})
export class MemberListComponent {
	memberList: IMember[] = [];
	constructor(private memberService: MembersService, public dialog:MatDialog) {
		this.memberService.getMembers("/members", null).subscribe({
			next: (response) => {
				this.memberList = <IMember[]>response.data;
			},
			error: (error) => {
				this.dialog.open(DialogComponent, {
					data: {
						title: "Error en la carga de miembros",
						description: error,
						value: "error",
					},
				});
			},
		});
	}

	getUser(a:string){
		return a.slice(a.lastIndexOf('/')+1)
	}
}
