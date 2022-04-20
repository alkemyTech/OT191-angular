import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import {PasswordModule} from 'primeng/password';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RippleModule} from 'primeng/ripple';
import {ProgressBarModule} from 'primeng/progressbar';

@NgModule({
  exports: [ 
    ButtonModule,
    RadioButtonModule,
    CheckboxModule,
    InputTextModule,
    RippleModule,
    ProgressSpinnerModule,
    PasswordModule,
    DividerModule,
    CardModule,
    ProgressBarModule
  ]
})
export class PrimengModule { }
