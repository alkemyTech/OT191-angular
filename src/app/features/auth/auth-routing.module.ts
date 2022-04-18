import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './pages/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RegisterFormComponent } from './pages/register-form/register-form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginFormComponent },
      { path: 'register', component: RegisterFormComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
