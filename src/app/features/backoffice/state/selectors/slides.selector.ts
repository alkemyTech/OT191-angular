import { SlideState } from "src/app/core/models/slides.state";
import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store"; 
import { State } from "src/app/features/auth/reducers/auth.reducer";

export const selectSlideFeatures = (state: AppState) => state.slides;
export const selectAuthFeatueres = (state: AppState) => state.auth

export const selectListItems = createSelector(
    selectSlideFeatures,
    (state: SlideState) => state.slides
);

export const selectLoading = createSelector(
    selectSlideFeatures,
    (state: SlideState) => state.loading
)

export const selectAuthLoading = createSelector(
    selectAuthFeatueres,
    (state: State) => state.logged
)