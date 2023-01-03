import { ChangeDetectionStrategy, Component } from '@angular/core';
import {BaseCellRendererDirective} from "../../../directives/base-cell-renderer.directive";

@Component({
  selector: 'app-status-cell-renderer',
  templateUrl: './status-cell-renderer.component.html',
  styleUrls: ['./status-cell-renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusCellRendererComponent extends BaseCellRendererDirective  {

}
