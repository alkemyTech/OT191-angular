import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../../core/utils/primeng/primeng.module';
import { SharedModule } from '../../shared/shared.module';
import { SlidesComponent } from './pages/slides/slides.component';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { HomeEditComponent } from './pages/home-edit/home-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SlidesComponent,
    HomeEditComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    SharedModule,
    BackofficeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BackofficeModule { }
