import { createReducer, on } from "@ngrx/store";


import { SlideState } from "src/app/core/models/slides.state";
import { loadingSlides, loadedSlides } from "../actions/slide.actions";

export const initialState: SlideState = { loading: false, slides: [] };

export const slidesReducer = createReducer(
    initialState,
    on(loadingSlides,(state) => {
        return {... state, loading: true }
    }),
    on(loadedSlides,(state, {slides}) => {
        return {... state, loading: false, slides }
    }),
)