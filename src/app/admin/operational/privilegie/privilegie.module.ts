import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    PrivilegieEditComponent,
    PrivilegieComponent,
    PrivilegieViewComponent,
    PrivilegieDeleteComponent
} from './';


import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    declarations: [
        PrivilegieEditComponent,
        PrivilegieComponent,
        PrivilegieViewComponent,
        PrivilegieDeleteComponent
    ],
    exports: [],
    providers: []
})
export class PrivilegieModule { }
