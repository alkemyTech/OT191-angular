import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEditComponent } from './pages/home-edit/home-edit.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: ''},
      { path: 'home', component: HomeEditComponent},
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackofficeRoutingModule { }
