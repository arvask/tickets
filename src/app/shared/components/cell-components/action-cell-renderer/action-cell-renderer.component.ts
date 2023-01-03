import { Component, inject } from "@angular/core";

import { ModalService } from "@shared/services";

import { BaseCellRendererDirective } from "../../../directives/base-cell-renderer.directive";

@Component({
    selector: "app-action-cell-renderer",
    templateUrl: "./action-cell-renderer.component.html",
    styleUrls: ["./action-cell-renderer.component.scss"],
})
export class ActionCellRendererComponent extends BaseCellRendererDirective {
    modalService = inject(ModalService);
    editTicket() {
        this.modalService.open(this.rowId);
    }
}
