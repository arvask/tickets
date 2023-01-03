import { DepartmentType, TicketStatusType } from "../enums";

export interface ITicket {
    identifier: string;
    departmentIdentifier: DepartmentType;
    title: string;
    messages: string;
    attachments: Blob;
    status: TicketStatusType;
    createdAt: string;
    updateAt: string;
}
