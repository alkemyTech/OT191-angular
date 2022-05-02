import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { HttpService } from "./services/http.service";
import { MaterialModule } from './utils/material/material.module';
import { PrimengModule } from './utils/primeng/primeng.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, PrimengModule, MaterialModule],
  providers: [HttpService],
})
export class CoreModule {}
