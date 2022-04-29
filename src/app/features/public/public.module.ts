import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../../core/utils/primeng/primeng.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { FormcontactComponent } from './formcontact/formcontact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonationsComponent } from './pages/donations/donations.component';
import { GraciasComponent } from './pages/donations/gracias/gracias.component';
import { MatDialogModule } from '@angular/material/dialog';

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
    SharedModule,
    MatDialogModule,
  ],
  providers:[CurrencyPipe]
})
export class PublicModule {}
