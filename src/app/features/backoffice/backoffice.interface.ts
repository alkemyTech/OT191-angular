export interface ICategory {
	id: number;
	name: string;
	description: string;
	pathImage: string;
}
export interface IOrganization {
	name: string;
	logo: string | ArrayBuffer;
	shortDescription: string;
	longDescription: string;
	links: { facebook: string; twitter: string; instagram: string };
}
