export interface Slide {
    id:          number;
    name:        string;
    description: string;
    image:       string;
    order:       string;
    user_id:     number | null;
    created_at:  string;
    updated_at:  string;
    deleted_at:  string;
    group_id:    number | null;
}

export interface SlideResponse {
    success: boolean;
    data: Slide;
    message: string;
}