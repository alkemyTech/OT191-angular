import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PrimengModule } from "../../core/utils/primeng/primeng.module";
import { HomeComponent } from "./pages/home/home.component";
import { DonationsComponent } from "./pages/donations/donations.component";
import { GraciasComponent } from "./pages/donations/gracias/gracias.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [HomeComponent, DonationsComponent, GraciasComponent],
  imports: [CommonModule, PrimengModule, FormsModule],
})
export class PublicModule {}
