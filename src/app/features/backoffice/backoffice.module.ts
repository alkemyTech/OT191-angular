import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../../core/utils/primeng/primeng.module';
import { CreationNewsComponent } from './pages/creation-news/creation-news.component';

@NgModule({
  declarations: [
    CreationNewsComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class BackofficeModule { }
