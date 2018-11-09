import { Routes } from '@angular/router';

import { AuthGuardRouterService } from 'src/app/shared/services/auth-guard-router.service';
import { UserComponent } from './user.component';


export const userRoutes: Routes = [
  {
    path: 'usuarios',
    component: UserComponent,
    canActivate: [AuthGuardRouterService]
  }
];

