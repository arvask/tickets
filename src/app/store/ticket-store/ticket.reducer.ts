import { createReducer, on } from '@ngrx/store';
import * as TicketActions from './ticket.actions';
import { ITicket } from "../../core/interfaces";

export const ticketFeatureKey = 'tickets';

export interface TicketState {
    tickets: ITicket[];
    isLoading: boolean;
    error: any;
}

export const initialState: TicketState = {
    tickets: [],
    isLoading: false,
    error: null
};

export const ticketReducer = createReducer(
    initialState,
    on(TicketActions.loadTicketsList, state => ({ ...state, isLoading: true })),
    on(TicketActions.loadTicketsListSuccess, (state, {tickets}) => ({ ...state, tickets, isLoading: false })),
    on(TicketActions.loadTicketsListFail, (state, {error}) => ({ ...state, error, isLoading: false })),
);
