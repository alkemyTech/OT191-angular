import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import {EMPTY} from 'rxjs'
import { map, mergeMap, catchError } from "rxjs/operators";
import { SlideProviderService } from "../../services/providers/slidesController/slide-provider.service";

@Injectable()
export class SlideEffects {

    loadSlides$ = createEffect(()=> this.actions$.pipe(
        ofType('[Load Slides] Loading Slides'),
        mergeMap(() => this.slideService.getSlides()
        .pipe(
            map(slides => ({ type: '[Load Slides] Loaded success', slides})),
            catchError(() => EMPTY)
        ))
    ));

    constructor(
        private actions$: Actions,
        private slideService: SlideProviderService
    ) {}
}

