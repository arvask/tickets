import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ticketFeatureKey, TicketState} from "./ticket.reducer";



export const selectFeature = createFeatureSelector<TicketState>(ticketFeatureKey);

export const selectFeatureTickets = createSelector(
    selectFeature,
    (state: TicketState) => state.tickets
);
