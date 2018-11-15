import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    UserEditComponent,
    UserComponent,
    UserViewComponent,
    UserDeleteComponent
} from './';


import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddressModule } from '../extra/address/address.module';
import { DocumentModule } from '../extra/document/document.module';
import { SocialModule } from '../extra/social/social.module';
import { ContactModule } from '../extra/contact/contact.module';

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
        UserEditComponent,
        UserComponent,
        UserViewComponent,
        UserDeleteComponent
    ],
    exports: [],
    providers: []
})
export class UserModule { }
