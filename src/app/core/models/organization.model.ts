export interface Organization {
    id:                number;
    name:              string;
    logo:              string;
    short_description: string;
    long_description:  string;
    welcome_text:      string;
    address:           string;
    phone:             string;
    cellphone:         number | null;
    created_at:        Date;
    updated_at:        Date;
    deleted_at:        Date | null;
    group_id:          number | null;
    facebook_url:      string;
    linkedin_url:      string;
    instagram_url:     string;
    twitter_url:       string;
}
export interface IOrganization {
	name: string;
	logo: string | ArrayBuffer;
	shortDescription: string;
	longDescription: string;
	links: { facebook: string; twitter: string; instagram: string };
}
