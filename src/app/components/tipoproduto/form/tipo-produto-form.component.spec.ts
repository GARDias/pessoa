import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoProdutoFormComponent } from './tipo-produto-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TipoProdutoService } from '../../service/tipo-produto.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBootstrapModule } from '../../app-bootstrap.module';
import { BaseServiceStub } from '../../../stub/base.service.stub';



describe('TipoProdutoFormComponent', () => {
  let component: TipoProdutoFormComponent;
  let fixture: ComponentFixture<TipoProdutoFormComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        AppBootstrapModule,
        SharedModule
      ],
      providers: [
        {
          provide: TipoProdutoService,
          useClass: BaseServiceStub
        }
      ],
      declarations: [ TipoProdutoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoProdutoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
