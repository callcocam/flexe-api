/**
 * Arquivo de configuração de rotas.
 *
 * @author Claudio Campos <contato@sigasmart.com.br>
 * @since 0.0.3
 */

import { Routes } from '@angular/router'; 
import { AuthGuardRouterService } from 'src/app/shared/services/auth-guard-router.service';

import { 
	UserComponent,
	UserCreateComponent,
  UserEditComponent,
  UserDeleteComponent,
	UserViewComponent
} from './';

export const userRoutes: Routes = [
  {
    path: 'usuarios',
    component:  UserComponent,
    canActivate: [AuthGuardRouterService]
  },
  {
    path: 'usuarios/cadastrar',
    component:  UserCreateComponent,
    canActivate: [AuthGuardRouterService],
    data: {
      title: 'Cadastrar User'
    }
  },
  {
    path: 'usuarios/:id/editar',
    component:  UserEditComponent,
    canActivate: [AuthGuardRouterService],
    data: {
      title: 'Editar User'
    }
  },
  {
    path: 'usuarios/:id/excluir',
    component:  UserDeleteComponent,
    canActivate: [AuthGuardRouterService],
    data: {
      title: 'Excluir User'
    }
  },
  {
    path: 'usuarios/:id/view',
    component:  UserViewComponent,
    canActivate: [AuthGuardRouterService],
    data: {
      title: 'Visualizar User'
    }
  }
];