import { Component } from "@angular/core";
import { BaseCellRendererDirective } from "../../../directives/base-cell-renderer.directive";

@Component({
    selector: "app-id-cell-renderer",
    templateUrl: "./id-cell-renderer.component.html",
    styleUrls: ["./id-cell-renderer.component.scss"],
})
export class IDCellRendererComponent extends BaseCellRendererDirective {}
