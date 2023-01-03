import { Type } from "@angular/core";
import {
    ActionCellRendererComponent,
    DateCellRendererComponent,
    TextCellRendererComponent,
    StatusCellRendererComponent,
} from "@shared/components";

export const cellComponentConstant: Map<string, Type<any>> = new Map<
    string,
    Type<any>
>([
    ["identifier", StatusCellRendererComponent],
    ["createdAt", DateCellRendererComponent],
    ["updateAt", DateCellRendererComponent],
    ["departmentIdentifier", StatusCellRendererComponent],
    ["title", TextCellRendererComponent],
    ["status", StatusCellRendererComponent],
    ["action", ActionCellRendererComponent],
]);
