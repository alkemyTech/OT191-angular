import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Store } from "@ngrx/store";

import { AlertService } from "src/app/core/services/alert.service";
import { User } from "src/app/core/models/user.model";
import {
	getAuth,
	GoogleAuthProvider,
	OAuthCredential,
	UserCredential,
} from "firebase/auth";
import { Login } from "../../../../../store/auth/actions/auth.actions";
import { Authenticate } from "../../../../../core/models/authentication.model";
import { State } from "src/app/store/auth/reducers/auth.reducer";
import { ValidatorService } from "../../../services/auth/validators/validator.service";
import { AuthService } from "../../../services/auth/auth.service";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Component({
	selector: "app-login-form",
	templateUrl: "./login-form.component.html",
	styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent {
	loading = false;

	loginForm: FormGroup = this.fb.group({
		email: [
			"",
			[Validators.required, Validators.pattern(this.valSer.emailPattern)],
		],
		password: ["", [Validators.required]],
	});

	constructor(
		private router: Router,
		private alerts: AlertService,
		private fb: FormBuilder,
		private auth: AuthService,
		private valSer: ValidatorService,
		private store: Store<State>,
		private db: AngularFirestore,
	) {}

	isInvalid(value: string) {
		return (
			this.loginForm.controls[value].errors &&
			this.loginForm.controls[value].touched
		);
	}

	onSubmit() {
		if (this.loginForm.invalid) {
			this.loginForm.markAllAsTouched();
			return;
		}

		this.loading = true;

		try {
			let user: Partial<User> = {
				email: this.loginForm.controls["email"].value,
				password: this.loginForm.controls["password"].value,
			};

			this.store.dispatch(new Login(user as Authenticate));

			this.auth.login(user).subscribe({
				next: (res) => {
					const docRef=this.db.collection<{token:string, rolUser:string}>('users');
					docRef.add({token:res.data.token, rolUser:'Administrador'})
					localStorage.setItem("token", res.data.token);
					this.loading = false;
					this.router.navigate(["/"]);
				},
				error: (err) => {
					this.loading = false;
					this.alerts.alertNotification(
						"Error",
						"Error Usuario o contraseña incorrectos",
						"error"
					);
				},
			});
		} catch (error) {
			this.alerts.alertNotification("Error", "Error desconocido", "error");
			this.loading = false;
		}
	}

	onGoogleLogin() {
    this.loading = true;
		try {
			this.auth.loginGoogle().then((result) => {
				const credential = result.credential as OAuthCredential;
				const token = <string>credential.accessToken;
				const email = <string>result.user?.email;
				const password = "";
				this.store.dispatch(new Login({ email, password } as Authenticate));
				const docRef=this.db.collection<{token:string, rolUser:string}>('users');
				docRef.add({token:token, rolUser:'Administrador'})
				localStorage.setItem("token", token);
				this.loading = false;
				this.router.navigate(["/"]);
			});
		} catch (error) {
			this.alerts.alertNotification("Error", "Error desconocido", "error");
			this.loading = false;
		}
	}
}
