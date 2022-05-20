import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Slide } from 'src/app/core/models/slides.model';
import { SlideProviderService } from '../../services/providers/slidesController/slide-provider.service';
import { Store } from '@ngrx/store';
import { loadedSlides, loadingSlides } from 'src/app/store/slides/actions/slide.actions';
import { selectListItems } from 'src/app/store/slides/selectors/slides.selector';
import { AppState } from 'src/app/store';
import { Router } from "@angular/router";

@Component({
  selector: 'app-show-slides',
  templateUrl: './show-slides.component.html',
  styleUrls: ['./show-slides.component.scss']
})
export class ShowSlidesComponent{
  slides$: Observable<any> = new Observable();


  constructor(
    private userP: SlideProviderService, private store:Store<AppState>,
    private router:Router,
  ) { 
    this.slides$ = this.store.select(selectListItems);
  }

  ngOnInit(): void {
    
    this.store.dispatch(loadingSlides())    
  }


}
