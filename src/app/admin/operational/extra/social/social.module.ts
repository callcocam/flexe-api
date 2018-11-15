/**
 * Componente de listagem de contacts.
 *
 * @author Claudio Campos <contato@sigasmart.com.br>
 * @since 0.0.3
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import {
    SocialComponent,
} from './';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    declarations: [
        SocialComponent
    ],
    exports: [
        SocialComponent
    ],
    providers: []
})
export class SocialModule { }
