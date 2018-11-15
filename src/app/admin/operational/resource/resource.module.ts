import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import {
    ResourceEditComponent,
    ResourceComponent,
    ResourceViewComponent,
    ResourceDeleteComponent
} from './';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    declarations: [
        ResourceEditComponent,
        ResourceComponent,
        ResourceViewComponent,
        ResourceDeleteComponent
    ],
    exports: [],
    providers: []
})
export class ResourceModule { }
