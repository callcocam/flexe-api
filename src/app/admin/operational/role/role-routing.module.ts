
import { Routes } from '@angular/router';
import { RoleComponent } from './role.component';
import { AuthGuardRouterService } from 'src/app/shared/services/auth-guard-router.service';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { RoleDeleteComponent } from './role-delete/role-delete.component';

export const roleRoutes: Routes = [
  {
    path: 'roles',
    component: RoleComponent,
    canActivate: [AuthGuardRouterService]
  },
  {
    path: 'roles/cadastrar',
    component: RoleComponent,
    canActivate: [AuthGuardRouterService],
    data: {
      title: 'Cadastrar Nivel De Acesso'
    }
  },
  {
    path: 'roles/:id/editar',
    component: RoleEditComponent,
    canActivate: [AuthGuardRouterService],
    data: {
      title: 'Editar Nivel De Acesso'
    }
  },

  {
    path: 'roles/:id/excluir',
    component: RoleDeleteComponent,
    canActivate: [AuthGuardRouterService],
    data: {
      title: 'Excluir Nivel De Acesso'
    }
  }
];
