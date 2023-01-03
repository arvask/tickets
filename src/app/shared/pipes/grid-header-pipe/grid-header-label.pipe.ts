import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone: true,
    name: "gridHeaderLabel",
})
export class GridHeaderLabelPipe implements PipeTransform {
    transform(value: string, map: Map<string, string>): unknown {

        console.info(map.get(value))
        return map.get(value);
    }
}
