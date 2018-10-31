import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../core/services/base.service';

@Injectable({
    providedIn: 'root'
})
export class TipoProdutoService extends BaseService<TipoProdutoService, number> {

    constructor(http: HttpClient) {
        super("/api/produtos/tipo-produto", http);
    }

}