import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../../core/utils/primeng/primeng.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { FormcontactComponent } from './formcontact/formcontact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonationsComponent } from './pages/donations/donations.component';
import { GraciasComponent } from './pages/donations/gracias/gracias.component';

@NgModule({
  declarations: [
    HomeComponent,
    FormcontactComponent,
    DonationsComponent,
    GraciasComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PublicModule {}
