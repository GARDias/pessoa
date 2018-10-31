import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoProdutoListComponent } from './tipo-produto-list.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TipoProdutoService } from '../../service/tipo-produto.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBootstrapModule } from '../../app-bootstrap.module';
import { SharedModule } from '../../../shared/shared.module';

describe('TipoProdutoListComponent', () => {
  let component: TipoProdutoListComponent;
  let fixture: ComponentFixture<TipoProdutoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        HttpClientTestingModule,
        AppBootstrapModule,
        SharedModule

      ],
      declarations: [ TipoProdutoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoProdutoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method getLista', () => {
    // let retorno = [{id: 1, descricao: 'teste mock'}];
    // let service = fixture.debugElement.injector.get(TipoProdutoService);
    // spyOn(service, 'findAll').and.returnValue(of(retorno));
    // component.getLista();
    // expect(component.dados).toBe(retorno);
    
 });

});
