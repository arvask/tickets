import {Component, Inject, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-edit-ticket',
  templateUrl: './create-edit-ticket.component.html',
  styleUrls: ['./create-edit-ticket.component.scss'],
  standalone: true
})
export class CreateEditTicketComponent {
  constructor(   @Optional() public dialogRef: MatDialogRef<CreateEditTicketComponent>,
                 @Inject(MAT_DIALOG_DATA) public dialogData: any) {
  }

}
