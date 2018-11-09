
import { Routes } from '@angular/router';

import { AuthGuardRouterService } from 'src/app/shared/services/auth-guard-router.service';
import { PrivilegieComponent } from './privilegie.component';

export const prvilegieRoutes: Routes = [
  {
    path: 'privilegios',
    component: PrivilegieComponent,
    canActivate: [AuthGuardRouterService]
  },
];
