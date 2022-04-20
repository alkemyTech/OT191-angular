import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../../core/utils/primeng/primeng.module';
import { SlidesComponent } from './pages/slides/slides.component';
import { EditionFormComponent } from './pages/edition-form/edition-form.component';

@NgModule({
  declarations: [
    SlidesComponent,
    EditionFormComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class BackofficeModule { }
