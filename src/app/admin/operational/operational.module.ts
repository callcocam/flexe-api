import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceComponent } from './resource/resource.component';
import { PrivilegieComponent } from './privilegie/privilegie.component';
import { RoleComponent } from './role/role.component';
import { BreadcrumbComponent } from '../utils/breadcrumb/breadcrumb.component';
import { SharedModule } from '../../shared/shared.module';
import { CityComponent } from './city/city.component';
import { CityEditComponent } from './city/city-edit/city-edit.component';
import { CityDeleteComponent } from './city/city-delete/city-delete.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RoleEditComponent } from './role/role-edit/role-edit.component';
import { RoleDeleteComponent } from './role/role-delete/role-delete.component';
import { ResourceEditComponent } from './resource/resource-edit/resource-edit.component';
import { ResourceDeleteComponent } from './resource/resource-delete/resource-delete.component';
import { PrivilegieDeleteComponent } from './privilegie/privilegie-delete/privilegie-delete.component';
import { PrivilegieEditComponent } from './privilegie/privilegie-edit/privilegie-edit.component';

import {
    CompanieCreateComponent,
    CompanieEditComponent,
    CompanieComponent,
    CompanieViewComponent,
    CompanieDeleteComponent
} from './companie';


import {
    UserComponent,
    UserCreateComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserViewComponent
} from './user';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AppRoutingModule
    ],
    declarations: [
        BreadcrumbComponent,
        RoleComponent,
        ResourceComponent,
        PrivilegieComponent,
        CompanieCreateComponent,
        CompanieEditComponent,
        CompanieComponent,
        CompanieViewComponent,
        CompanieDeleteComponent,
        UserCreateComponent,
        UserEditComponent,
        UserDeleteComponent,
        UserViewComponent,
        UserComponent,
        CityComponent,
        CityEditComponent,
        CityDeleteComponent,
        RoleEditComponent,
        RoleDeleteComponent,
        ResourceEditComponent,
        ResourceDeleteComponent,
        PrivilegieDeleteComponent,
        PrivilegieEditComponent
    ],
    exports: [
        BreadcrumbComponent
    ],
    providers: []
})
export class OperationalModule { }
