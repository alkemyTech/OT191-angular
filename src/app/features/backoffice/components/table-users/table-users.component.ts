import { Component, Input } from '@angular/core';

import { User } from 'src/app/core/models/user.model';

import { Observable } from 'rxjs';

import { MessageService } from 'primeng/api';

import { AlertService } from '../../../../core/services/alert.service';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss'],
  providers: [ MessageService]
})
export class TableUsersComponent {


  @Input() users!: User[] | null | Observable<User>;

  constructor(
    private messageService: MessageService,
    private alerts: AlertService
  ) { }

  confirm1() {
    this.alerts.alertQuestion('Delete', 'Are you sure you want to delete this user?','question').then(
      async ( result) => {
        if (result.isConfirmed) {
          this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'You have deleted this user' });
        }
      });
    
}

}
