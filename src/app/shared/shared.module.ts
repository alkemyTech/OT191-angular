import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from '../core/utils/primeng/primeng.module';

import { RolPipe } from './pipes/rol.pipe';
import { TitleViewComponent } from './components/title-view/title-view.component';

@NgModule({
  declarations: [
    TitleViewComponent,
    RolPipe
  ],
  exports: [
    TitleViewComponent,
    RolPipe
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class SharedModule { }
