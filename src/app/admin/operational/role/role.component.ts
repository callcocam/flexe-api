import { Component, OnInit } from '@angular/core';
import { Settings } from '../../../../shared/settings.model';
import { ResourcesService } from '../../../../shared/resources.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html'
})
export class RoleComponent implements OnInit {

  source: Settings[];

  constructor(private service: ResourcesService) { }

  ngOnInit() {

    this.service.path = '/role'

  }


}
