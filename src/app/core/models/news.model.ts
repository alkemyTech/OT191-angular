export interface News {
    id:          number;
    name:        string;
    slug:        null;
    content:     string;
    image:       string;
    user_id:     null;
    category_id: number;
    created_at:  Date;
    updated_at:  Date;
    deleted_at:  null;
    group_id:    number;
}