import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from '../core/utils/primeng/primeng.module';

import { RolPipe } from './pipes/rol.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleViewComponent } from './components/title-view/title-view.component';

@NgModule({
  declarations: [
    TitleViewComponent,
    NavbarComponent,
    FooterComponent,
    RolPipe
  ],
  exports: [
    TitleViewComponent,
    RolPipe,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class SharedModule { }
