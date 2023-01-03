import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { CreateEditTicketComponent } from "../../modals";

@Injectable({
    providedIn: "root",
})
export class ModalService {
    constructor(public dialog: MatDialog) {}

    open(ticketID?: string) {
        return this.dialog.open(CreateEditTicketComponent, {data: ticketID});
    }
}
