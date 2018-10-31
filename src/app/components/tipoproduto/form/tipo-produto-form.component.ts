import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { TipoProdutoService } from '../../service/tipo-produto.service';
import { MessageService } from '../../../core/message/message.service';

@Component({
  selector: 'app-tipo-produto-form',
  templateUrl: './tipo-produto-form.component.html',
  styleUrls: ['./tipo-produto-form.component.css']
})
export class TipoProdutoFormComponent implements OnInit {

  tipoProdutoForm: FormGroup;
  id: number = null;
  title: string;
  submitted = false;

  constructor(private router: Router, private route: ActivatedRoute, private service: TipoProdutoService, private formBuilder: FormBuilder, private message: MessageService) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'];
    this.tipoProdutoForm = this.formBuilder.group({
      'descricao': [null, Validators.required]
    });

    let id = this.route.snapshot.params['id'];
    if (id !== null && id !== undefined) {
      this.inicializarTipoProduto(id);
    }
  }

  ngOnDestroy(){
    this.message.clearMessage();
  }

  inicializarTipoProduto(id: number) {
    this.id = id;
    this.service.findOne(id).subscribe(data => {
      this.tipoProdutoForm.setValue({
        descricao: data.descricao,
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.submitted = true;
    this.message.clearMessage();
    if (this.id === null ) {
      this.service.save(this.tipoProdutoForm.value)
        .subscribe(res => {
          this.router.navigate(['/tipo-produto']);
        }, (err) => {
          this.message.sendMessageError(err.texto ? err.texto : err);
        });
    } else {
      this.service.update(this.id, this.tipoProdutoForm.value)
        .subscribe(res => {
          this.router.navigate(['/tipo-produto']);
        }, (err) => {
          this.message.sendMessageError(err.texto ? err.texto : err);
        });
    }
  }

}
