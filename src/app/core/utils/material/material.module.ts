import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  exports: [
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
