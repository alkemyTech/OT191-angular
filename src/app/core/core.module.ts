import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./services/http.service";
import { NgModule } from "@angular/core";
import { PrimengModule } from './utils/primeng/primeng.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, PrimengModule],
  providers: [HttpService],
})
export class CoreModule {}
