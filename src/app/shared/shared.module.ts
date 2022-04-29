import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../core/utils/primeng/primeng.module';
import { TitleViewComponent } from './components/title-view/title-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    TitleViewComponent,
    NavbarComponent,
    FooterComponent,
    DialogComponent
  ],
  exports: [
    TitleViewComponent,
    NavbarComponent,
    FooterComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    MatDialogModule
  ]
})
export class SharedModule { }
