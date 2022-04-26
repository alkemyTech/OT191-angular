export interface Slide {
    id:          number;
    name:        string;
    description: string;
    image:       string;
    order:       number | null;
    user_id:     number | null;
    created_at:  Date;
    updated_at:  Date;
    deleted_at:  number | null;
    group_id:    number | null;
}
