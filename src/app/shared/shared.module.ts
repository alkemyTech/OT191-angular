import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../core/utils/material/material.module';
import { PrimengModule } from '../core/utils/primeng/primeng.module';

import { RolPipe } from './pipes/rol.pipe';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleViewComponent } from './components/title-view/title-view.component';

@NgModule({
  declarations: [
    TitleViewComponent,
    NavbarComponent,
    FooterComponent,
    RolPipe,
    CardComponent,
    LoadingSpinnerComponent,
  ],
  exports: [
    TitleViewComponent,
    RolPipe,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    MaterialModule
  ]
})
export class SharedModule { }
