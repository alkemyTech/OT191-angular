import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from '../core/utils/primeng/primeng.module';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleViewComponent } from './components/title-view/title-view.component';
import { CardComponent } from './components/card/card.component';
import { RolPipe } from './pipes/rol.pipe';

@NgModule({
  declarations: [
    TitleViewComponent,
    NavbarComponent,
    FooterComponent,
    RolPipe,
    CardComponent,
  ],
  exports: [
    TitleViewComponent,
    RolPipe,
    NavbarComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class SharedModule { }
