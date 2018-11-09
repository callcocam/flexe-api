import {Injectable} from '@angular/core';

import {ResourcesService} from '../../../../shared/resources.service';

import {Role} from './role.model';

@Injectable({
    providedIn: 'root'
})
export class RoleService{

    items:Role[]

    constructor(private resource:ResourcesService) { }

    getItems(): Role[] {

        this.resource.path = '/role'

        this.resource.getList().subscribe(response=>{

            this.items = response

        })

        return this.items

    }
}
