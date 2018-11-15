import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { CityComponent } from './city/city.component';
import { CityEditComponent } from './city/city-edit/city-edit.component';
import { CityDeleteComponent } from './city/city-delete/city-delete.component';


import { RouterModule } from '@angular/router';
import { CompanieModule } from './companie/companie.module';
import { PrivilegieModule } from './privilegie/privilegie.module';
import { RoleModule } from './role/role.module';
import { ResourceModule } from './resource/resource.module';
import { UserModule } from './user/user.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        CompanieModule,
        PrivilegieModule,
        RoleModule,
        ResourceModule,
        UserModule
    ],
    declarations: [
        CityComponent,
        CityEditComponent,
        CityDeleteComponent
    ],
    exports: [],
    providers: []
})
export class OperationalModule { }
