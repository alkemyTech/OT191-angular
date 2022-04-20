import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../../core/utils/primeng/primeng.module';
import { SlidesComponent } from './pages/slides/slides.component';
import { EditOrganizationComponent } from './edit-organization/edit-organization.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SlidesComponent,
    EditOrganizationComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule
  ]
})
export class BackofficeModule { }
