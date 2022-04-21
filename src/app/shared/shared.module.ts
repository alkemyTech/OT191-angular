import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../core/utils/primeng/primeng.module';
import { TitleViewComponent } from './components/title-view/title-view.component';

@NgModule({
  declarations: [
    TitleViewComponent
  ],
  exports: [
    TitleViewComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class SharedModule { }
