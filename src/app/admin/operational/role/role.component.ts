/**
 * Componente de listagem de roles.
 *
 * @author Claudio Campos <contato@sigasmart.com.br>
 * @since 0.0.3
 */

import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../../../shared/resources.service';
import { SnotifyService, Snotify } from 'ng-snotify';

@Component({
  selector: 'call-role',
  templateUrl: './role.component.html'
})
export class RoleComponent implements OnInit {


  constructor(private service: ResourcesService, private alert: SnotifyService) { }

  ngOnInit() {

    this.service.path = '/role'

  }

}
