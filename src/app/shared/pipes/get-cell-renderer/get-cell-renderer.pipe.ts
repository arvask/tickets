import {Pipe, PipeTransform, Type} from "@angular/core";
import { cellComponentConstant } from "../../constants";

@Pipe({
    standalone: true,
    name: "getCellRenderer",
})
export class GetCellRendererPipe implements PipeTransform {
    test = cellComponentConstant;
    transform(value: string): any {
        debugger
        return this.test.get(value);
    }
}
