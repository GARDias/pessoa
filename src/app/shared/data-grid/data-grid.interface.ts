import {EventEmitter, InjectionToken, QueryList} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { ColunaComponent } from './coluna/coluna.component';

export const DATA_GRID_TOKEN = new InjectionToken<NgTable>('NgTable');

export interface NgTable {
    // basic
    data$: BehaviorSubject<Array<any>>;
    data: Array<any>;
    rows$: BehaviorSubject<Array<any>>;
    rows: Array<any>;
    cols: QueryList<ColunaComponent>;
    total: number;
  
    // pagination
    page$: BehaviorSubject<number>;
    page: number;
    size$: BehaviorSubject<number>;
    size: number;
  
    // event
    onRowClick: EventEmitter<any>;
  
    initRows(rows: Array<any>, total: number): void;
    getSelections(field: string): Array<any>;
    checkAll(checked: boolean, field: string): void;
    radioChange(row: any, field: string): void;
    toggleOrder(sort: string): void;
    orderBy(sort: string, order: 'desc' | 'asc');
    selectSize(size: number);
    generalSearch(term: string): void;
    advancedSearch(query: any): void;
    refresh(): void;
  
    // hide
    hideColumn(col: ColunaComponent): void;
    showColumn(col: ColunaComponent): void;
    toggleColumn(col: ColunaComponent): void;
    hideColumnByIndex(index: number): void;
    showColumnByIndex(index: number): void;
    toggleColumnByIndex(index: number): void;
    hideColumnByField(field: string): void;
    showColumnByField(field: string): void;
    toggleColumnByField(field: string): void;
  }