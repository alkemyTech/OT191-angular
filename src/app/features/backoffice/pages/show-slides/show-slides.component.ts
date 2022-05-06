import { Component, } from '@angular/core';
import { Observable } from 'rxjs';
import { Slide } from 'src/app/core/models/slides.model';
import { SlideProviderService } from '../../services/providers/slidesController/slide-provider.service';

@Component({
  selector: 'app-show-slides',
  templateUrl: './show-slides.component.html',
  styleUrls: ['./show-slides.component.scss']
})
export class ShowSlidesComponent{
  slides$!: Observable<Slide[]>;

  constructor(
    private userP: SlideProviderService,
  ) { 
    this.slides$ = this.userP.getSlides();
  }



}
