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
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { UserFirebase } from "src/app/core/models/user-firebase.model";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "src/app/shared/components/dialog/dialog.component";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private itemsCollection!: AngularFirestoreCollection<UserFirebase>;
	private itemsUsers!: Observable<UserFirebase[]>
	private token: string = "";
	private loggedIn = false;
	private logginGoogle=false;
	private doc:any;

	constructor(
		private baseApi: BaseApiService,
		private privateApi: PrivateApiService,
		private router: Router,
		private alert: AlertService,
		private afAuth: AngularFireAuth,
		private db: AngularFirestore,
		private dialog: MatDialog,
	) {

		this.itemsCollection = db.collection<UserFirebase>('users');
    	this.itemsUsers = this.itemsCollection.valueChanges();
	}

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
			let tokenres = JSON.stringify(res.data.token)

			localStorage.setItem("token", tokenres);
			return res;
		  })
		);
	  }

	openDialog(){
		this.dialog.open(DialogComponent,{
			data:{
				title:"¿Quiere Cerrar sesión?",
				description:"Aprete aceptar para continuar, cierre para continuar logueado",
				value:"info",
			}
		})
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
					
					
					this.logout();
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
		
		
		localStorage.clear();
		this.router.navigate(["/"]);
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
