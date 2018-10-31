import { Pipe, PipeTransform } from '@angular/core';
import { ColunaComponent } from './coluna/coluna.component';

export enum TD_TEMPLATE{
  TEXT, CHECKBOX, RADIO
}

@Pipe({
  name: 'templateDataGridType'
})
export class TemplateDataGridTypePipe implements PipeTransform {
  transform(col: ColunaComponent): any {
    if (col.checkbox) {return TD_TEMPLATE.CHECKBOX; }
    if (col.radio) {return TD_TEMPLATE.RADIO; }
    return TD_TEMPLATE.TEXT;
  }

}