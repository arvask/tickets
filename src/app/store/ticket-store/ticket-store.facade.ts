import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import * as TicketActions from './ticket.actions';
import {ITicket} from "../../core/interfaces";
import {Observable} from "rxjs";
import { selectFeatureTickets } from "./ticket.selector";

@Injectable()
export class TicketStoreFacade {

    tickets$: Observable<ITicket[]>
    constructor(private store: Store) {
        this.tickets$ = this.store.select(selectFeatureTickets)
    }

    loadTickets(params: any): void {
        this.store.dispatch(TicketActions.loadTicketsList({params}))
    }

    editTicket(ticket: ITicket): void {
        this.store.dispatch(TicketActions.editTickets({ticket}))
    }

    createTickets(ticket: ITicket): void {
        this.store.dispatch(TicketActions.createTicket({ticket}))
    }
}
