import { createAction, props } from '@ngrx/store';
import { ITicket } from "../../core/interfaces";

export const loadTicketsList = createAction('[Ticket] Load List', props<{params: any}>());
export const loadTicketsListSuccess = createAction('[Ticket] Load List success', props<{tickets: ITicket[]}>());
export const loadTicketsListFail = createAction('[Ticket] Load List fail', props<{error: ITicket[]}>());

export const createTicket = createAction('[Ticket] Create', props<{ticket: ITicket}>());
export const createTicketSuccess = createAction('[Ticket] Create success', props<{ticket: ITicket}>());
export const createTicketFail = createAction('[Ticket] Create fail', props<{error: ITicket}>());


export const editTickets = createAction('[Ticket] edit', props<{ticket: ITicket}>());
export const editTicketsSuccess = createAction('[Ticket] edit success', props<{ticket: ITicket}>());
export const editTicketsFail = createAction('[Ticket] edit fail', props<{error: ITicket}>());
