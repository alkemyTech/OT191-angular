import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { AppRoutingModule } from "./app-routing.module";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { CommonModule } from "@angular/common";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { NgModule } from "@angular/core";
import { PrimengModule } from '../core/utils/primeng/primeng.module';
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { RouterModule } from "@angular/router";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { BackofficeModule } from "./backoffice/backoffice.module";
import { PublicModule } from "./public/public.module";
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
  ],
  exports: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
    RouterModule,
    BackofficeModule,
    PublicModule,
    RouterModule
  ],
  imports: [
    CommonModule, 
    AppRoutingModule, 
    RouterModule,
    PrimengModule,
    SharedModule,
],
})
export class FeaturesModule {}