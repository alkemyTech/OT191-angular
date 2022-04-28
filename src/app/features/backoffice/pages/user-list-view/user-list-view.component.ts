import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { UserProviderService } from '../../services/providers/user-provider.service';
import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrls: ['./user-list-view.component.scss']
})
export class UserListViewComponent {

  users$!: Observable<User[]>;

  constructor(
    private userP: UserProviderService,
  ) { 
    this.users$ = this.userP.getUsers();
  }



}
