import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

import { Observable, of, throwError } from "rxjs";
import { map, tap } from "rxjs/operators";

import { User } from "src/app/core/models/user.model";
import { AlertService } from "src/app/core/services/alert.service";
import { PrivateApiService } from "src/app/features/backoffice/services/private-api.service";
import { BaseApiService } from "src/app/shared/services/base-api.service";
import { GoogleAuthProvider } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { UserFirebase } from "src/app/core/models/user-firebase.model";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private itemsCollection!: AngularFirestoreCollection<UserFirebase>;
	private token: string = "";
	private loggedIn = false;
	private logginGoogle=false;

	constructor(
		private baseApi: BaseApiService,
		private privateApi: PrivateApiService,
		private router: Router,
		private alert: AlertService,
		private afAuth: AngularFireAuth,
	) {}

	async loginGoogle() {
		const provider = new GoogleAuthProvider();
		this.logginGoogle=true;
		return this.afAuth.signInWithPopup(provider);
	}

	logoutGoogle() {
		this.afAuth.signOut();
	}

	login(user: User | Partial<User>) {
		const u = {email: user.email,
		password:user.password}
		return this.baseApi.post("/login", u).pipe(
		  map((res: any) => {
			
			if (res.data.token == undefined) {
			  return throwError("Ususario o contraseña incorrectos");
			}
			this.loggedIn = true;
			this.token = res.data.token;
			
			return res;
		  })
		);
	  }

	register(user: User | Partial<User>) {
		return this.baseApi.post("/register", user).pipe(
			map((res: any) => {
				if (!res.success) {
					return throwError("Error al registrarse");
				}
				return res;
			})
		);
	}

	verifyAuth():Observable<any> {
		return this.privateApi.get("/auth/me").pipe(
			tap(res => {
				this.loggedIn=res.success;
			})
		);
	}

	askLogout() {
		this.alert
			.alertQuestion(
				"¿Quiere cerrar sesion?",
				"Confirme para salir",
				"question"
			)
			.then((res) => {
				if (res.isConfirmed) {
					of(true);
				}
			});
		return of(false);
	}

	logout() {
		this.afAuth.onAuthStateChanged(function(user) {
			if (user) {
			  // User is signed in.
			}
		  });
		this.loggedIn = false;
		localStorage.removeItem("token");
		return of(true);
	}

	invalidAccess() {
		this.alert.alertNotification(
			"Acceso restringido",
			"No tiene permiso para acceder a esta area. ¡Debes ser un usuario válido!",
			"error"
		);
		this.router.navigate(["/auth/login"]);
	}
	
}
