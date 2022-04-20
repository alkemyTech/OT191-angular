import {ButtonModule} from 'primeng/button';
import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import {ImageModule} from 'primeng/image';

@NgModule({
  exports: [ 
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    InputMaskModule,
    DropdownModule,
    ImageModule
  ]
})
export class PrimengModule { }
