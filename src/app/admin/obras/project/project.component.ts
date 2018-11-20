/**
 * Componente de listagem de projects.
 *
 * @author Claudio Campos <contato@sigasmart.com.br>
 * @since 0.0.3
 */

import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../../../shared/resources.service';
import { SnotifyService, Snotify } from 'ng-snotify';

@Component({
  selector: 'call-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {


  constructor(private service: ResourcesService, private alert: SnotifyService) { }

  ngOnInit() {

    this.service.path = '/project'

  }

}
