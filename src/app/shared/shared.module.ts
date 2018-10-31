import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { NgbCollapseModule, NgbPaginationModule, NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { GridComponent } from './data-grid/grid/grid.component';
import { ColunaComponent } from './data-grid/coluna/coluna.component';
import { TemplateDataGridTypePipe } from './data-grid/template-data-grid-type.pipe';
import { ToolbarComponent } from './data-grid/toolbar/toolbar.component';
import { ModalConfirmacaoComponent } from './modal/modal-confirmacao/modal-confirmacao.component';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    NgbCollapseModule,
    NgbPaginationModule,
    NgbDropdownModule,
    NgbModalModule
  ],
  declarations: [
    LayoutComponent, 
    HeaderComponent, 
    FooterComponent, 
    GridComponent, 
    ColunaComponent, 
    TemplateDataGridTypePipe, 
    ToolbarComponent, 
    ModalConfirmacaoComponent
  ],
  exports: [
    LayoutComponent,
    GridComponent,
    ColunaComponent,
    ToolbarComponent
  ],
  entryComponents: [ModalConfirmacaoComponent],
  providers: []
})
export class SharedModule { }
