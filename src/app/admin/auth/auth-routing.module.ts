import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login.component';
import {ForgotComponent} from './forgot.component';
import {AuthGuestRouterService} from '../../shared/services/auth-guest-router.service';
import {LogoutComponent} from './logout.component';
import {AuthGuardRouterService} from '../../shared/services/auth-guard-router.service';

import { PageNotFoundComponent } from '../../home/page-not-found/page-not-found.component';


const routes: Routes = [
    {
        path: 'admin', component: AuthComponent, children:[
            {
                path: 'auth',
                component: LoginComponent,
                canActivate: [AuthGuestRouterService]
            },
            {
                path: 'auth/login',
                component: LoginComponent,
                canActivate: [AuthGuestRouterService]
            },
            {
                path: 'auth/forgot',
                component: ForgotComponent,
                canActivate: [AuthGuestRouterService]
            },
            {
                path: 'auth/logout',
                component: LogoutComponent,
                canActivate: [AuthGuardRouterService]
            }
        ]

    }
    , { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [],
    exports:[RouterModule]
})
export class AuthRoutingModule { }
