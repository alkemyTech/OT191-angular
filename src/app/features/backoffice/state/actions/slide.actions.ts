import { Slide } from "src/app/core/models/slides.model";
import { createAction, props } from "@ngrx/store";

export const loadingSlides = createAction("[Load Slides] Loading Slides");

export const loadedSlides = createAction(
  "[Load Slides] Loaded success",
  props<{ slides: Slide[] }>()
);

export const editSlide = createAction(
    "[Edit Slide] Edited Slide",
    props<{slide: Slide}>()
);


export const deleteSlides = createAction(
    "[Delete Slide] Selected Slides deleted"
);