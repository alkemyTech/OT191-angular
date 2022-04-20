// declare module GeneralCategorie {
export interface DataCategorie {
  id: number;
  name: string;
  description: string;
  image: string;
  parent_category_id?: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: any;
  group_id?: number;
}

export interface ObjectCategoria {
  success: boolean;
  data: DataCategorie[];
  message: string;
}
// }
