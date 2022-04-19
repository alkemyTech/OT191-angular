import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


import { PrimengModule } from '../core/utils/primeng/primeng.module';
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ 
    routingComponents,
    
  ],
  exports: [
    routingComponents,
    RouterModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  imports: [
    CommonModule,
    CKEditorModule,
    AppRoutingModule, 
    RouterModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    
],
})
export class FeaturesModule {}
