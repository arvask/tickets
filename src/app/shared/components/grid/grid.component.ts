import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatTableModule } from "@angular/material/table";

import { GridHeaderLabelPipe } from "../../pipes";
import { DateCellRendererComponent } from "../cell-components";
import { DynamicModule } from "ng-dynamic-component";
import { GetCellRendererPipe } from "../../pipes/get-cell-renderer/get-cell-renderer.pipe";

@Component({
    standalone: true,
    imports: [
        CommonModule,
        MatTableModule,
        GridHeaderLabelPipe,
        DynamicModule,
        GetCellRendererPipe,
    ],
    selector: "app-grid",
    templateUrl: "./grid.component.html",
    styleUrls: ["./grid.component.scss"],
})
export class GridComponent {
    @Input() displayedColumns: any;
    @Input() data: any;
    @Input() title: any;
    @Input() headerMap: any;

    inputs = {
        hello: "world",
    };
    outputs = {};
}
