import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    CompanieEditComponent,
    CompanieComponent,
    CompanieViewComponent,
    CompanieDeleteComponent
} from './';


import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactModule } from '../extra/contact/contact.module';
import { SocialModule } from '../extra/social/social.module';
import { DocumentModule } from '../extra/document/document.module';
import { AddressModule } from '../extra/address/address.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        ContactModule,
        SocialModule,
        DocumentModule,
        AddressModule
    ],
    declarations: [
        CompanieEditComponent,
        CompanieComponent,
        CompanieViewComponent,
        CompanieDeleteComponent
    ],
    exports: [],
    providers: []
})
export class CompanieModule { }
