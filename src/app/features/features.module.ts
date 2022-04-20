import { AppRoutingModule, routingComponents } from "./app-routing.module";

import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";
import { PrimengModule } from '../core/utils/primeng/primeng.module';

import { RouterModule } from "@angular/router";

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
    routingComponents,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    routingComponents,
    RouterModule
  ],
  imports: [
    CommonModule, 
    AppRoutingModule, 
    RouterModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
],
})
export class FeaturesModule {}
