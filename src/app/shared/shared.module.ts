import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { MaterialModule } from '../core/utils/material/material.module';
import { PrimengModule } from '../core/utils/primeng/primeng.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { RolPipe } from './pipes/rol.pipe';
import { CardComponent } from './components/card/card.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleViewComponent } from './components/title-view/title-view.component';
import { FooterCampaignComponent } from './components/footer-campaign/footer-campaign.component';
import { CampaignHeaderComponent } from './components/campaign-header/campaign-header.component';

@NgModule({
  declarations: [
    TitleViewComponent,
    NavbarComponent,
    FooterComponent,
    DialogComponent,
    RolPipe,
    CardComponent,
    LoadingSpinnerComponent,
    FooterCampaignComponent,
    CampaignHeaderComponent,
  ],
  exports: [
    TitleViewComponent,
    RolPipe,
    NavbarComponent,
    FooterComponent,
    DialogComponent,
    CardComponent,
    LoadingSpinnerComponent,
    FooterCampaignComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    MaterialModule,
    MatDialogModule,
    PdfViewerModule,
    MatExpansionModule,
  ]
})
export class SharedModule { }
