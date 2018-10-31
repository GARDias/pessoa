import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TipoProdutoService } from './tipo-produto.service';


describe('TipoProdutoService', () => {

  let service: TipoProdutoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TipoProdutoService]
    });
    service = TestBed.get(TipoProdutoService);
    httpMock = TestBed.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([TipoProdutoService], (service: TipoProdutoService) => {
    expect(service).toBeTruthy();
  }));

});
