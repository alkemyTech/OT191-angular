import { Slide } from "./slides.model";

export interface SlideState {
    loading: boolean;
    slides: ReadonlyArray<Slide>;
}