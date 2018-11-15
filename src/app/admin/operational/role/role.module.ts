import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import {
    RoleEditComponent,
    RoleComponent,
    RoleViewComponent,
    RoleDeleteComponent
} from './';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    declarations: [
        RoleEditComponent,
        RoleComponent,
        RoleViewComponent,
        RoleDeleteComponent
    ],
    exports: [],
    providers: []
})
export class RoleModule { }
