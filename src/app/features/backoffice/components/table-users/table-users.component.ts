import { Component, Input, ViewChild } from "@angular/core";

import { User } from "src/app/core/models/user.model";

import { MessageService } from "primeng/api";
import { Table } from "primeng/table";

import { UserProviderService } from "../../services/providers/user-provider.service";
import { AlertService } from "../../../../core/services/alert.service";

@Component({
  selector: "app-table-users",
  templateUrl: "./table-users.component.html",
  styleUrls: ["./table-users.component.scss"],
  providers: [MessageService],
})
export class TableUsersComponent {
  @Input() users!: User[] | null;

  productDialog: boolean = false;

  user!: Partial<User>;

  selectedUsers!: User[];

  submitted: boolean = false;

  statuses: any[] = [
    { label: "Normal", value: 1 },
    { label: "Administrador", value: 2 },
  ];

  @ViewChild("dt") dt: Table | undefined;
  // filtro para el buscador de una columna
  applyFilter($event: any, stringVal: any) {
    this.dt!.filter(
      ($event.target as HTMLInputElement).value,
      stringVal,
      "contains"
    );
  }

  constructor(
    private messageService: MessageService,
    private alerts: AlertService,
    private userP: UserProviderService
  ) {}

  editUser(user: User) {
    this.productDialog = true;
    this.user = { ...user };
  }

  deleteSelectedUsers() {
    this.alerts
      .alertQuestion(
        "Borrar",
        "¿Seguro que quieres borrar todos los usuarios marcados?",
        "warning"
      )
      .then(async (result) => {
        if (result.isConfirmed) {
          this.messageService.add({
            severity: "success",
            summary: "Éxito",
            detail: "Se han eliminado los usuarios",
          });

          this.users = this.users!.filter(
            (val) => !this.selectedUsers.includes(val)
          );
          this.selectedUsers.forEach((user) => {
            this.userP.deleteUser(user.id.toString()).subscribe();
          });
          this.selectedUsers = [];
        }
      });
  }

  deleteUser(user: User) {
    this.alerts
      .alertQuestion(
        "Borrar",
        "¿Seguro que quieres borrar este usuario?",
        "warning"
      )
      .then(async (result) => {
        if (result.isConfirmed) {
          this.users = this.users!.filter((val) => val.id !== user.id);
          this.user = {};

          this.userP.deleteUser(user.id.toString()).subscribe({
            next: (data) => {
              this.messageService.add({
                severity: "error",
                summary: "Se eliminó",
                detail: "Se ha eliminado el usuario",
                life: 3000,
              });
            },
            error: (err) => {
              this.alerts.alertNotification(
                "Error",
                err.error.message,
                "error"
              );
              return;
            },
          });
        }
      });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  async saveUser() {
    this.submitted = true;

    this.users![this.findIndexById(this.user.id!)] = this.user as User;

    this.userP.updateUser(this.user.id!.toString(), this.user).subscribe({
      next: (data) => {
        this.messageService.add({
          severity: "success",
          summary: "Éxito",
          detail: "Se ha actualizado el usuario",
          life: 3000,
        });
      },
      error: (err) => {
        this.alerts.alertNotification("Error", err.error.message, "error");
        return;
      },
    });

    this.users = [...this.users!];
    this.productDialog = false;
    this.user = {};
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.users!.length; i++) {
      if (this.users![i].id == id) {
        index = i;
        break;
      }
    }

    return index;
  }
}
