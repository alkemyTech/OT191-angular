export interface IActivity {
	id: number,
	name: string,
	slug: null,
	description:string,
	image: string,
	user_id: null,
	category_id: null,
	created_at: string,
	updated_at: string,
	deleted_at: string,
	group_id: number
}
export interface IActivityResponse {
	success:boolean,
	data:IActivity[]|IActivity,
	message:string
}