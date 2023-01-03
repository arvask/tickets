import { Injectable } from "@angular/core";

import { catchError, map, switchMap, tap } from "rxjs/operators";
import { of } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as TicketActions from "./ticket.actions";
import { HttpService } from "@shared/services";
import { ITicket } from "../../core/interfaces";

@Injectable()
export class TicketEffect {
    constructor(private actions$: Actions, private http: HttpService) {}

    logActions$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TicketActions.loadTicketsList),
            tap((action) => console.log(action)),
            switchMap((params) =>
                this.http.getTicketsList().pipe(
                    map((tickets: ITicket[]) =>
                        TicketActions.loadTicketsListSuccess({ tickets })
                    ),
                    catchError((error) =>
                        of(TicketActions.loadTicketsListFail(error))
                    )
                )
            )
        )
    );
}
