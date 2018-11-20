import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgbdTypeaheadComponent } from './search/typeahead-component';
import { SharedModule } from '../shared/shared.module';
import { ProjetoComponent } from './projeto/projeto.component';
import { RouterModule } from '@angular/router';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContratoComponent } from './projeto/contrato/contrato.component';
import { ExecucaoComponent } from './projeto/execucao/execucao.component';
import { ConclusaoComponent } from './projeto/conclusao/conclusao.component';
import { LicitacaoComponent } from './projeto/licitacao/licitacao.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConcluidosComponent } from './projetos/concluidos/concluidos.component';
import { RelatorioComponent } from './projeto/relatorio/relatorio.component';

@NgModule({
  imports: [
    CommonModule,    
    RouterModule,
    SharedModule
  ],
  declarations: [
  HomeComponent,
  NgbdTypeaheadComponent,
   ProjetoComponent,
   ProjetosComponent,
   ContratoComponent,
   ExecucaoComponent,
   ConclusaoComponent,
   LicitacaoComponent,
   PageNotFoundComponent,
   ConcluidosComponent,
   RelatorioComponent]
})
export class HomeModule { }
