import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmacaoComponent } from './modal-confirmacao.component';
import { NgbModalModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('ModalConfirmacaoComponent', () => {
  let component: ModalConfirmacaoComponent;
  let fixture: ComponentFixture<ModalConfirmacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModalModule
      ],
      declarations: [ ModalConfirmacaoComponent ],
      providers: [
        NgbActiveModal
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
