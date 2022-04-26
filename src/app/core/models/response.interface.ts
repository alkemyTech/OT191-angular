import { UserI } from "./user.interface";

export interface ResponseI{
    status:string;
    response:string;
    data: UserI;
    message: string;
} 

