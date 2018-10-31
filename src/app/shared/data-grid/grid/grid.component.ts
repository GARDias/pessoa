import {
  AfterViewInit,
  Component, ContentChildren, EventEmitter, forwardRef, Inject, Input, OnDestroy, OnInit, Optional,
  Output,
  QueryList
} from '@angular/core';
import {from} from 'linq/linq';
import {Subscription, BehaviorSubject, Observable} from 'rxjs';
import {from as _from, combineLatest as _combineLatest} from 'rxjs';
import {filter, switchMap, map, take, skip, debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import {isNullOrUndefined, isObject} from 'util';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import { NgTable, DATA_GRID_TOKEN } from '../data-grid.interface';
import {TD_TEMPLATE} from '../template-data-grid-type.pipe';
import { ColunaComponent } from '../coluna/coluna.component';

@Component({
  selector: 'data-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [
    {provide: DATA_GRID_TOKEN, useExisting: forwardRef(() => GridComponent), multi: false}
  ]
})
export class GridComponent implements NgTable, OnInit  {

  TD_TEMPLATE = TD_TEMPLATE;

  data$: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);
  @Input()
  set data(value: Array<any>) {this.data$.next(value); }
  get data(): Array<any> { return this.data$.getValue(); }
  rows$: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);
  @Input()
  set rows(value: Array<any>) {this.rows$.next(value); }
  get rows(): Array<any> { return this.rows$.getValue(); }

  @ContentChildren(ColunaComponent)
  cols: QueryList<ColunaComponent>;
  total = 0;

  // pagination
  page$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  set page(value: number) { this.page$.next(value); }
  get page(): number { return this.page$.getValue(); }
  size$: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  @Input()
  set size(value: number) {this.size$.next(value); }
  get size(): number { return this.size$.getValue(); }
  @Input()
  itensPorPagina: Array<number> = [10, 25, 50, 100, 500];

  // event
  @Output()
  onRowClick = new EventEmitter<any>();

  // handler
  @Input()
  responseHandler = (data: any): any => {
    return data;
  }

  constructor(
    protected http: HttpClient,
    @Optional() protected router: Router,
    @Optional() protected route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.data$
      .subscribe((data) => {
        let rows: Array<any>;
          rows = data;
        this.initRows(rows, rows.length);

      });
  }

  initRows(rows: Array<any>, total: number) {
    this.rows = rows;
    this.total = total;
  }

  get startIndex(): number {
    const index = (this.page - 1) * this.size;
    return isNaN(index) ? 0 : index;
  }

  get endIndex(): number { return this.page * this.size; }

  getSelections(field: string): Array<any> {
    return from(this.data).where(row => {
      if (row[field]) {
        return true;
      }
      return false;
    }).toArray();
  }

  checkAll(checked: boolean, field: string) {
    _from(this.rows)
      .pipe(
        skip(this.startIndex),
        take(this.size)
      ).subscribe((row) => row[field] = checked);
  }

  radioChange(row: any, field: string) {
    _from(this.rows)
      .subscribe((r) => r[field] = false);
    row[field] = true;
  }

  toggleOrder(sort: string) {
  }

  orderBy(sort: string, order: 'desc' | 'asc') {
    const col = from(this.cols.toArray()).where((c) => c.field === sort).first();
    if (col.checkbox || col.radio) {
      return;
    }

    const formatter = col.formatter;

    if (order === 'asc') {
      this.rows = from(this.rows).orderBy((row) => formatter(row[sort])).toArray();
    } else {
      this.rows = from(this.rows).orderByDescending((row) => formatter(row[sort])).toArray();
    }
  }

  keepConfigure() {
  }

  selectSize(size: number) {
    this.page = 1;
    this.size$.next(size);
  }

  generalSearch(term: string) {
    this.page = 1;
  }

  advancedSearch(query: any) {
    this.page = 1;
  }

  refresh() {
  }

  // hide
  hideColumn(col: ColunaComponent): void {
    col.hide();
  }

  showColumn(col: ColunaComponent): void {
    col.show();
  }

  toggleColumn(col: ColunaComponent): void {
    col.toggle();
  }

  hideColumnByIndex(index: number): void {
    if (index >= this.cols.length) { return; }
    this.cols.toArray()[index].hide();
  }

  showColumnByIndex(index: number): void {
    if (index >= this.cols.length) { return; }
    this.cols.toArray()[index].show();
  }

  toggleColumnByIndex(index: number): void {
    if (index >= this.cols.length) { return; }
    this.cols.toArray()[index].toggle();
  }

  hideColumnByField(field: string): void {
    this.cols.toArray().filter((col) => col.field === field)
      .forEach((col) => col.hide());
  }

  showColumnByField(field: string): void {
    this.cols.toArray().filter((col) => col.field === field)
      .forEach((col) => col.show());
  }

  toggleColumnByField(field: string): void {
    this.cols.toArray().filter((col) => col.field === field)
      .forEach((col) => col.show());
  }

  formatShowingRows = (from: number, to: number, total: number) => {
    return `Página ${from} de ${to} total ${total}.`;
  }
  formatBeforePerPage = () => {
    return ` `;
  }
  formatAfterPerPage = () => {
    return ` linhas por página`;
  }

}
