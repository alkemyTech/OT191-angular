import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../core/utils/material/material.module';
import { PrimengModule } from '../../core/utils/primeng/primeng.module';

import { FormcontactComponent } from './formcontact/formcontact.component';
import { DonationsComponent } from './pages/donations/donations.component';
import { HomeComponent } from './pages/home/home.component';
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
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatDialogModule,
  ],
  providers:[CurrencyPipe]
})
export class PublicModule {}
