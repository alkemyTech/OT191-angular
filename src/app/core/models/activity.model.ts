export interface IActivity {
	success: boolean;
	data: { 
		id: number,
		name: string,
		slug: null,
		description:string,
		image: string,
		user_id: null,
		category_id: null,
		created_at: string,
		updated_at: string,
		deleted_at: null,
		group_id: number
	};
	message: string;
}
export interface IActivities {
	success: boolean;
	data: { 
		id: number,
		name: string,
		slug: null,
		description:string,
		image: string,
		user_id: null,
		category_id: null,
		created_at: string,
		updated_at: string,
		deleted_at: null,
		group_id: number
	}[];
	message: string;
}