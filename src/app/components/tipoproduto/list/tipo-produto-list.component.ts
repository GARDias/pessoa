import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoProdutoService } from '../../service/tipo-produto.service';
import { TipoProduto } from '../../model/tipo-produto.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from '../../../core/message/message.service';
import { Observable, forkJoin } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmacaoComponent } from '../../../shared/modal/modal-confirmacao/modal-confirmacao.component';

@Component({
  selector: 'app-tipo-produto-list',
  templateUrl: './tipo-produto-list.component.html',
  styleUrls: ['./tipo-produto-list.component.css']
})
export class TipoProdutoListComponent implements OnInit {

  dados: any;
  title: string;
  
  constructor(private router: Router,
              private route: ActivatedRoute, 
              private service: TipoProdutoService,
              private message: MessageService, 
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getLista();
    this.title = this.route.snapshot.data['title'];
  }

  getLista(){
    this.dados = this.service.findAll()
  }


  acaoDeletar(tipoProduto: TipoProduto) {
    const modalRef = this.modalService.open(ModalConfirmacaoComponent, { size: 'lg' });
    modalRef.componentInstance.titulo = 'Exclusão de registro';
    modalRef.componentInstance.corpo = 'Deseja excluir o tipo de produto: <b>'+tipoProduto.descricao+'</b>';
    modalRef.result.then((result) => {
      if(result){
        this.service.delete(tipoProduto.id)
        .subscribe(res => {
          this.message.sendMessageSuccess('Registro excluído com sucesso.');
          this.getLista();
        }, (err) => {
          this.message.sendMessageError(err);
        });
      }
    });
  }

}
