/**
 * Componente de listagem de projects.
 *
 * @author Claudio Campos <contato@sigasmart.com.br>
 * @since 0.0.3
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import {
    ProjectEditComponent,
    ProjectComponent,
    ProjectViewComponent,
    ProjectDeleteComponent
} from './';
import { ContractComponent } from './contract/contract.component';
import { ExecutionComponent } from './execution/execution.component';
import { LicitationComponent } from './licitation/licitation.component';
import { ConclusionComponent } from './conclusion/conclusion.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    declarations: [
        ProjectEditComponent,
        ProjectComponent,
        ProjectViewComponent,
        ProjectDeleteComponent,
        ContractComponent,
        ExecutionComponent,
        LicitationComponent,
        ConclusionComponent
    ],
    exports: [],
    providers: []
})

export class ProjectModule { }
