import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../../core/utils/primeng/primeng.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    SharedModule
  ]
})
export class PublicModule { }
