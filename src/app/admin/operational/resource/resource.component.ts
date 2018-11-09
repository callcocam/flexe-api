import { Component, OnInit } from '@angular/core';
import {ResourcesService} from '../../../../shared/resources.service';
import { Settings } from 'src/app/shared/settings.model';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html'
})
export class ResourceComponent implements OnInit {

  source:Settings[];

  constructor(private service:ResourcesService) { }

  ngOnInit() {

  	this.service.path = '/resource'

  }

}
