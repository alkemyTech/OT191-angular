import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Slide } from 'src/app/core/models/slides.model';
import { SlideProviderService } from '../../services/providers/slidesController/slide-provider.service';
import { Store } from '@ngrx/store';
import { loadedSlides, loadingSlides } from '../../state/actions/slide.actions';
import { selectListItems } from '../../state/selectors/slides.selector';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-show-slides',
  templateUrl: './show-slides.component.html',
  styleUrls: ['./show-slides.component.scss']
})
export class ShowSlidesComponent{
  slides$: Observable<any> = new Observable();

  constructor(
    private userP: SlideProviderService, private store:Store<AppState>,
  ) { 
    this.slides$ = this.store.select(selectListItems);
  }

  ngOnInit(): void {
    
    this.store.dispatch(loadingSlides())    
  }


}
