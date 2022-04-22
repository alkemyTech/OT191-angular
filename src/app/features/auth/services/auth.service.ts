import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  login(user: User | Partial<User>) {
    throw new Error('Method not implemented.');
  }

  register(user: User | Partial<User>) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
