import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from '../core/utils/primeng/primeng.module';

import { RolPipe } from './pipes/rol.pipe';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleViewComponent } from './components/title-view/title-view.component';

@NgModule({
  declarations: [
    TitleViewComponent,
    NavbarComponent,
    FooterComponent,
    DialogComponent,
    RolPipe,
    CardComponent,
    LoadingSpinnerComponent,
  ],
  exports: [
    TitleViewComponent,
    RolPipe,
    NavbarComponent,
    FooterComponent,
    DialogComponent,
    CardComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    MatDialogModule
  ]
})
export class SharedModule { }
