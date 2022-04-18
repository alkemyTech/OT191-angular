import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../../core/utils/primeng/primeng.module';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule
  ]
})
export class BackofficeModule { }
