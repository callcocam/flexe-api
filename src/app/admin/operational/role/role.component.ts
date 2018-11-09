import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../../../shared/resources.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html'
})
export class RoleComponent implements OnInit {


  constructor(private service: ResourcesService) { }

  ngOnInit() {

    this.service.path = '/role'

  }


}
