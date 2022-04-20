import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../../core/utils/primeng/primeng.module';
import { SlidesComponent } from './pages/slides/slides.component';
import { UserformComponent } from './pages/userform/userform.component';


@NgModule({
  declarations: [
    SlidesComponent,
    UserformComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BackofficeModule { }
