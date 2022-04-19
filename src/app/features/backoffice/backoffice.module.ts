import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../../core/utils/primeng/primeng.module';
import { SlidesComponent } from './pages/slides/slides.component';

@NgModule({
  declarations: [
    SlidesComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class BackofficeModule { }
