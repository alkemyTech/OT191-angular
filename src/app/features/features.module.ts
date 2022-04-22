import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";
import { PrimengModule } from '../core/utils/primeng/primeng.module';

import { RouterModule } from "@angular/router";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { SharedModule } from '../shared/shared.module';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from "./auth/pages/login-form/login-form.component";
import { RegisterFormComponent } from "./auth/pages/register-form/register-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";

@NgModule({
  declarations: [
    
    routingComponents,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    routingComponents,
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
  ],
  
  imports: [
    CommonModule, 
    AppRoutingModule, 
    RouterModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
],
})
export class FeaturesModule {}
