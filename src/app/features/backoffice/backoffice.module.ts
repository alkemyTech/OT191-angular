import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../../core/utils/primeng/primeng.module';
import { SharedModule } from '../../shared/shared.module';


import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SlidesComponent } from './pages/slides/slides.component';
import { UserformComponent } from './pages/userform/userform.component';


@NgModule({
  declarations: [
    
    UserformComponent,
    
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
