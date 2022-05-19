export interface IMember {
	id:number,
	name: string;
	image: string;
	description: string;
	facebookUrl: string;
	linkedinUrl: string;
	created_at: string,
	updated_at: string,
	deleted_at: null,
	group_id: null
}
export interface IMemberResponse {
	success:boolean,
	data:IMember[]|IMember,
	message:string
}
