import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: "app-activity-form",
  templateUrl: "./activity-form.component.html",
  styleUrls: ["./activity-form.component.scss"],
})
export class ActivityFormComponent implements OnInit {
  title = "base-ong-angular-client";

  

  constructor(public dialog: MatDialog) {}

  // value can be => error , info, success
  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        title: "Hello World",
        description: "This is an example",
        value: "success",
      },
    });
  }


  ngOnInit(): void {}
}
