import { Component, OnInit } from '@angular/core';
import {Settings} from '../../../shared/settings.model';
import {ResourcesService} from '../../../shared/resources.service';

@Component({
  selector: 'app-privilegie',
  templateUrl: './privilegie.component.html'
})
export class PrivilegieComponent implements OnInit {

  source:Settings[];

  constructor(private service:ResourcesService) { }

  ngOnInit() {

  	this.service.path = '/privilegie'

  }

}
