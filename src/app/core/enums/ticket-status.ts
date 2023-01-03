export enum TicketStatus {
    New = 0,
    Edited = 1,

}
export type TicketStatusType = typeof TicketStatus[keyof typeof TicketStatus]
