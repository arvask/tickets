import { Component, Inject, OnInit, Optional } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { TicketStoreFacade } from "@feature/ticket/store";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { ITicket } from "@core/interfaces";
import { MatInputModule } from "@angular/material/input";

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, MatInputModule],
    providers: [TicketStoreFacade],
    selector: "app-create-edit-ticket",
    templateUrl: "./create-edit-ticket.component.html",
    styleUrls: ["./create-edit-ticket.component.scss"],
})
@UntilDestroy()
export class CreateEditTicketComponent implements OnInit {
    ticketForm: FormGroup;
    rowId: string = '';
    constructor(
        @Optional() public dialogRef: MatDialogRef<CreateEditTicketComponent>,
        @Inject(MAT_DIALOG_DATA) public dialogData: any,
        private fb: FormBuilder,
        private facade: TicketStoreFacade
    ) {
        this.ticketForm = this.fb.group({
            departmentIdentifier: [""],
            title: [""],
            messages: [""],
            attachments: [null],
        });
    }

    ngOnInit() {
        this.rowId = this.dialogData;
        debugger

        this.rowId &&
            this.facade
                .getCurrentTicket(this.rowId)
                .pipe(untilDestroyed(this))
                .subscribe((ticket) => {
                    debugger
                    ticket && this.patchValue(ticket);
                });
    }

    submit() {

        const ticket = this.ticketForm.getRawValue();
        this.rowId ? this.facade.editTicket(ticket) : this.facade.createTickets(ticket)
    }

    private patchValue(ticket: ITicket) {
        this.ticketForm.patchValue(ticket);
    }
}
