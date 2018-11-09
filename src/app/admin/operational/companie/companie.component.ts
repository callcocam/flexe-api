/**
 * Componente de listagem de companies.
 *
 * @author Claudio Campos <contato@sigasmart.com.br>
 * @since 0.0.3
 */

import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/shared/resources.service';
import { SnotifyService, Snotify } from 'ng-snotify';

@Component({
  selector: 'call-companie',
  templateUrl: './companie.component.html'
})
export class CompanieComponent implements OnInit {


  constructor(private service: ResourcesService, private alert: SnotifyService) { }

  ngOnInit() {

    this.service.path = '/companie'

  }

}
