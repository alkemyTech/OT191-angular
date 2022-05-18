import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { PrincipalComponent } from './principal/principal.component';
import { MemberListComponent } from './member-list/member-list.component';
import { PublicModule } from '../../public.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [PrincipalComponent, MemberListComponent]
})
export class AboutModule { }
