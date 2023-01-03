import { Component } from '@angular/core';
import {BaseCellRendererDirective} from "../../../directives/base-cell-renderer.directive";

@Component({
  selector: 'app-text-cell-renderer',
  templateUrl: './text-cell-renderer.component.html',
  styleUrls: ['./text-cell-renderer.component.scss']
})
export class TextCellRendererComponent extends BaseCellRendererDirective  {

}
