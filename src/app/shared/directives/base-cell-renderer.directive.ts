import {Directive, Input} from '@angular/core';

@Directive({
    standalone: true,
  selector: '[appBaseCellRenderer]'
})
export abstract class  BaseCellRendererDirective {
    @Input() value: unknown = null;
    @Input() rowId: string = '';

}
