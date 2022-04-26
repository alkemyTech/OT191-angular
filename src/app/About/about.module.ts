import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PrincipalComponent]
})
export class AboutModule { }
