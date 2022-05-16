import { ActionReducerMap } from "@ngrx/store";
import { SlideState } from "src/app/core/models/slides.state";
import { slidesReducer } from "./reducers/slides.reducer";


export interface BackofficeState {
    slide: SlideState;
}

export const ROOT_REDUCERS: ActionReducerMap<BackofficeState> = {
    slide: slidesReducer
}