import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../../core/utils/primeng/primeng.module';
import { ActivitiesComponent } from './activities/activities.component';
import {FormsModule} from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SlidesComponent } from './pages/slides/slides.component';
import { EditOrganizationComponent } from './edit-organization/edit-organization.component';

@NgModule({
  declarations: [
    EditOrganizationComponent,
    ActivitiesComponent,
    SlidesComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,
  ]
})
export class BackofficeModule { }
