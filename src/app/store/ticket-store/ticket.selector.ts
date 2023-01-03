import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ticketFeatureKey, TicketState} from "./ticket.reducer";
import {ITicket} from "@core/interfaces";



export const selectFeature = createFeatureSelector<TicketState>(ticketFeatureKey);

export const selectFeatureTickets = createSelector(
    selectFeature,
    (state: TicketState) => state.tickets
);

export const selectCurrentTicket = (ticketID: string) => createSelector(
    selectFeatureTickets,
    (tickets: ITicket[]) => tickets.find((ticket) => ticket.identifier === ticketID)
);
