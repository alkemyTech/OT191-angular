import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../../core/utils/primeng/primeng.module';
import { CategoriesComponent } from './categories/categories.component';
import { SharedModule } from '../../shared/shared.module';
import { ActivitiesComponent } from './activities/activities.component';
import {FormsModule} from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SlidesComponent } from './pages/slides/slides.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    ActivitiesComponent,
    SlidesComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,
  ]
})
export class BackofficeModule { }
