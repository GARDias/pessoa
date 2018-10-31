import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.css']
})
export class ModalConfirmacaoComponent implements OnInit {

  @Input() titulo;

  @Input() corpo;

  @Input() btnOk = 'Sim';
  @Input() btnCancel = 'Não';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
