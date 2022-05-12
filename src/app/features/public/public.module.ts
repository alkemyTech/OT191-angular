import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../core/utils/material/material.module';
import { PrimengModule } from '../../core/utils/primeng/primeng.module';

import { FormcontactComponent } from './pages/formcontact/formcontact.component';
import { DonationsComponent } from './pages/donations/donations.component';
import { HomeComponent } from './pages/home/home.component';
import { GraciasComponent } from './pages/donations/gracias/gracias.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeSlidesComponent } from './components/home-slides/home-slides.component';
import { PublicRoutingModule } from './public-routing.module';
import { MemberListComponent } from './pages/about/member-list/member-list.component';
import { PrincipalComponent } from './pages/about/principal/principal.component';

@NgModule({
  declarations: [
    HomeComponent,
    FormcontactComponent,
    DonationsComponent,
    GraciasComponent,
    HomeSlidesComponent,
    MemberListComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatDialogModule,
    PublicRoutingModule
  ],
  exports:[HomeSlidesComponent,MemberListComponent],
  providers:[CurrencyPipe]
})
export class PublicModule {}
