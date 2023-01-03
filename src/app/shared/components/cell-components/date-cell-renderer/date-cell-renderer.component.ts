import { Component } from "@angular/core";
import {BaseCellRendererDirective} from "../../../directives/base-cell-renderer.directive";
import {CommonModule} from "@angular/common";

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: "app-date-cell-renderer",
    templateUrl: "./date-cell-renderer.component.html",
    styleUrls: ["./date-cell-renderer.component.scss"],
})
export class DateCellRendererComponent extends BaseCellRendererDirective  {
}
