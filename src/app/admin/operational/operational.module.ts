import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';


import { RouterModule } from '@angular/router';
import { CompanieModule } from './companie/companie.module';
import { UserModule } from './user/user.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        CompanieModule,
        UserModule
    ],
    declarations: [
    ],
    exports: [],
    providers: []
})
export class OperationalModule { }
