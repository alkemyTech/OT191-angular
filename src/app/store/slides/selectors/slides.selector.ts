import { SlideState } from "src/app/core/models/slides.state";
import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store"; 

export const selectSlideFeatures = (state: AppState) => state.slides;

export const selectListItems = createSelector(
    selectSlideFeatures,
    (state: SlideState) => state.slides
);

export const selectLoading = createSelector(
    selectSlideFeatures,
    (state: SlideState) => state.loading
)