import { Component, Input, OnInit } from "@angular/core";
import { IMember } from "src/app/core/models/member.model";
import { MembersService } from "../../../services/members/members.service";

@Component({
	selector: "app-member-list",
	templateUrl: "./member-list.component.html",
	styleUrls: ["./member-list.component.scss"],
})
export class MemberListComponent {
	memberList: IMember[] = [];
	constructor(memberService: MembersService) {
		memberService.getMembers("/members", null).subscribe({
			next: (response) => {
				this.memberList = <IMember[]>response.data;
			},
			error: (error) => {
			},
		});
	}

	getUser(a:string){
		return a.slice(a.lastIndexOf('/')+1)
	}
}
