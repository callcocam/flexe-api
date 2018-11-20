/**
 * Componente de edição de companie.
 *
 * @author Cludio Campos <contato@sigasmart.com.br>
 * @since 0.0.1
 */

import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/shared/resources.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'call-companie-view',
  templateUrl: './companie-view.component.html',
  styleUrls: ['./companie-view.component.css']
})
export class CompanieViewComponent implements OnInit {

  constructor(private service: ResourcesService, private alert: SnotifyService) { }

  ngOnInit() {

    this.service.path = '/companie'

  }
}
