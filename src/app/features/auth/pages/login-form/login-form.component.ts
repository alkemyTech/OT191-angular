import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Store } from "@ngrx/store";

import { AlertService } from "src/app/core/services/alert.service";
import { User } from "src/app/core/models/user.model";

import { Login } from "../../actions/auth.actions";
import { Authenticate } from "../../models/authentication.model";
import { AuthState } from "../../reducers/auth.reducer";
import {
  State,
  selectError,
  selectPending,
} from "../../reducers/login-page.reducer";
import { AuthService } from "../../services/auth.service";
import { ValidatorService } from "../../services/validators/validator.service";

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
    private store: Store<AuthState>
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
          localStorage.setItem("token", res.token);
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
}
