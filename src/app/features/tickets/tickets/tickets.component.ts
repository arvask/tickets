import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { ITicket } from "@core/interfaces";
import { ModalService } from "@shared/services";
import { TicketStoreFacade } from "@feature/ticket/store";

import { ticketsHeaderLabelConstant } from "../constants";
import { ticketsColumnsConstant } from "../constants";

@Component({
    selector: "app-tickets",
    templateUrl: "./tickets.component.html",
    styleUrls: ["./tickets.component.scss"],
})
export class TicketsComponent implements OnInit {
    columns = ticketsColumnsConstant;
    headerLabelMap = ticketsHeaderLabelConstant;

    data$: Observable<ITicket[]>;
    constructor(
        private modalService: ModalService,
        private ticketFacade: TicketStoreFacade
    ) {
        this.data$ = this.ticketFacade.tickets$;
    }

    ngOnInit() {
        this.ticketFacade.loadTickets({});
        this.ticketFacade.tickets$.subscribe((data) => {
            console.info(data);
        });
    }

    addNewTicket(): void {
        this.modalService.open();
    }
}
