import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserFirebase } from "src/app/core/models/user-firebase.model";
import { AuthService } from "../auth/auth.service";

@Injectable({
	providedIn: "root",
})
export class loginGuardian implements CanActivate {
	constructor(
		private authService: AuthService,
		private router: Router,
		private db: AngularFirestore
	) {}
	private itemsCollection!: AngularFirestoreCollection<UserFirebase>;

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		let items: Observable<UserFirebase[]>;
		this.itemsCollection = this.db.collection<UserFirebase>("users");
		items = this.itemsCollection.valueChanges();
		return items.pipe(
			map((res) => {
				console.log(res)
				let item = res.find(
					(element) => element.token == localStorage.getItem("token")
				);
				if (item?.token == localStorage.getItem("token")) {
					this.router.navigate(["/"]);
					return false;
				}
				return true;
			})
		);
	}
}
