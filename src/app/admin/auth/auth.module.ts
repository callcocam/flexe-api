import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login.component';
import {ForgotComponent} from './forgot.component';
import {SharedModule} from '../../shared/shared.module';
import {SnotifyModule} from 'ng-snotify';
import {LogoutComponent} from './logout.component';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule.forRoot(),
        SnotifyModule
    ],
    declarations: [
        AuthComponent,
        LoginComponent,
        ForgotComponent,
        LogoutComponent
    ]
})
export class AuthModule { }
