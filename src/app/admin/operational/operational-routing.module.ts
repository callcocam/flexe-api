
import { Routes} from '@angular/router';

import {DashboardComponent} from '../../content/dashboard.component';
import {AboutComponent} from '../about/about.component';
import {AuthGuardRouterService} from '../../../shared/services/auth-guard-router.service';


export const operacionalRoutes:Routes = [
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [AuthGuardRouterService]
            },
            {
                path: 'sobre',
                component: AboutComponent,
                canActivate: [AuthGuardRouterService]
            }
];

