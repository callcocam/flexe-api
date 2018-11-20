/**
 * Componente de edição de project.
 *
 * @author Cludio Campos <contato@sigasmart.com.br>
 * @since 0.0.1
 */

import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/messages/notification.service';
import { ResourcesService } from 'src/app/shared/resources.service';

@Component({
  selector: 'call-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {
  
  public project

  constructor(public notificationService: NotificationService,
    private service: ResourcesService) { }

  ngOnInit() {

      this.service.path = '/project';
	
  }
}
