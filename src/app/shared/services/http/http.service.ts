import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ITicket } from "../../../core/interfaces";
import { DepartmentEnum, TicketStatus } from "../../../core/enums";

@Injectable({
    providedIn: "root",
})
export class HttpService {
    constructor() {}

    getTicketsList(): Observable<ITicket[]> {
        return of(TICKET_LIST);
    }

    createTicket(): Observable<void> {
        return new Observable<void>((observer) => observer.complete());
    }

    editTicket(ticket: ITicket): Observable<void> {
        return new Observable<void>((observer) => observer.complete());
    }
}

const TICKET_LIST: ITicket[] = [
    {
        identifier: "123",
        departmentIdentifier: DepartmentEnum.Sales,
        title: "First ticket",
        messages: "First ticket message",
        attachments: new Blob(),
        status: TicketStatus.New,
        createdAt: "Tue Jan 01 2013 00:00:00 GMT+0200",
        updateAt: "Tue Jan 01 2013 00:00:00 GMT+0200",
    },

    {
        identifier: "223",
        departmentIdentifier: DepartmentEnum.Sales,
        title: "Second ticket",
        messages: "Second ticket message",
        attachments: new Blob(),
        status: TicketStatus.New,
        createdAt: "Tue Jan 01 2013 00:00:00 GMT+0200",
        updateAt: "Tue Jan 01 2013 00:00:00 GMT+0200",
    },
];
