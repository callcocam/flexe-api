/**
 * Arquivo de configuração de rotas.
 *
 * @author Claudio Campos <contato@sigasmart.com.br>
 * @since 0.0.3
 */

import { Routes } from '@angular/router';
import { AuthGuardRouterService } from 'src/app/shared/services/auth-guard-router.service';

import {
  CompanieComponent,
  CompanieCreateComponent,
  CompanieEditComponent,
  CompanieDeleteComponent,
  CompanieViewComponent
} from './';

export const companieRoutes: Routes = [
  {
    path: 'empresa',
    component: CompanieComponent,
    canActivate: [AuthGuardRouterService]
  },
  {
    path: 'empresa/cadastrar',
    component: CompanieCreateComponent,
    canActivate: [AuthGuardRouterService],
    data: {
      title: 'Cadastrar Companie'
    }
  },
  {
    path: 'empresa/:id/editar',
    component: CompanieEditComponent,
    canActivate: [AuthGuardRouterService],
    data: {
      title: 'Editar Companie'
    }
  },
  {
    path: 'empresa/:id/excluir',
    component: CompanieDeleteComponent,
    canActivate: [AuthGuardRouterService],
    data: {
      title: 'Excluir Companie'
    }
  },
  {
    path: 'empresa/:id/view',
    component: CompanieViewComponent,
    canActivate: [AuthGuardRouterService],
    data: {
      title: 'Visualizar Companie'
    }
  }
];