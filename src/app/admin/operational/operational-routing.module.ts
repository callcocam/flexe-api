
import { Routes} from '@angular/router';

import {AboutComponent} from '../about/about.component';
import {AuthGuardRouterService} from '../../shared/services/auth-guard-router.service';
import { DashboardComponent } from '../../content/dashboard.component';


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

