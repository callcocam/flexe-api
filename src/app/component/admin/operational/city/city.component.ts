import { Component, OnInit } from '@angular/core';
import { Settings } from '../../../../shared/settings.model';
import { ResourcesService } from '../../../../shared/resources.service';
import { SnotifyService, Snotify } from 'ng-snotify';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html'
})
export class CityComponent implements OnInit {

  source: Settings;

  constructor(private service: ResourcesService, private alert: SnotifyService) { }

  ngOnInit() {

    this.service.path = '/city'

  }

}
