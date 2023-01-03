import { Component, Input } from "@angular/core";
import { CommonModule, NgTemplateOutlet } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { GridHeaderLabelPipe } from "../../pipes/grid-header-pipe/grid-header-label.pipe";
import { DateCellRendererComponent } from "../cell-components";

@Component({
    standalone: true,
    imports: [
        CommonModule,
        MatTableModule,
        GridHeaderLabelPipe,
        NgTemplateOutlet,
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

    test = DateCellRendererComponent;
}
