import { Routes } from '@angular/router';

import { AuthGuardRouterService } from 'src/app/shared/services/auth-guard-router.service';
import { CompanieComponent } from './companie.component';


export const companieRoutes: Routes = [
  {
    path: 'empresa',
    component: CompanieComponent,
    canActivate: [AuthGuardRouterService]
  },
];

