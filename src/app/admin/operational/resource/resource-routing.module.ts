import { Routes } from '@angular/router';

import { AuthGuardRouterService } from 'src/app/shared/services/auth-guard-router.service';
import { ResourceComponent } from './resource.component';
import { ResourceEditComponent } from './resource-edit/resource-edit.component';
import { ResourceDeleteComponent } from './resource-delete/resource-delete.component';

export const resourceRoutes: Routes = [
  {
    path: 'resources',
    component: ResourceComponent,
    canActivate: [AuthGuardRouterService]
  },
  {
    path: 'resources/cadastrar',
    component: ResourceEditComponent,
    canActivate: [AuthGuardRouterService],
    data: {
      title: 'Cadastrar Modulos'
    }
  },
  {
    path: 'resources/:id/editar',
    component: ResourceEditComponent,
    canActivate: [AuthGuardRouterService],
    data: {
      title: 'Editar Modulo'
    }
  },
  {
    path: 'resources/:id/excluir',
    component: ResourceDeleteComponent,
    canActivate: [AuthGuardRouterService],
    data: {
      title: 'Excluir Modulo'
    }
  }
];
