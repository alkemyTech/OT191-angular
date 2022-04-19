import {ButtonModule} from 'primeng/button';
import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputMaskModule} from 'primeng/inputmask';

@NgModule({
  exports: [ 
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    InputMaskModule
  ]
})
export class PrimengModule { }
