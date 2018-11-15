/**
 * Componente de edição de role.
 *
 * @author Cludio Campos <contato@sigasmart.com.br>
 * @since 0.0.1
 */

import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/messages/notification.service';
import { ActivatedRoute } from '@angular/router';
import { ResourcesService } from 'src/app/shared/resources.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'call-role-view',
  templateUrl: './role-view.component.html',
  styleUrls: ['./role-view.component.css']
})
export class RoleViewComponent implements OnInit {

  public role;
  
  constructor(public notificationService: NotificationService,
    private activateRoute: ActivatedRoute,
    private service: ResourcesService,
    private alert: SnotifyService) { }

  ngOnInit() {

	
    let id = this.activateRoute.snapshot.params['id'];

      this.service.path = '/role';

      this.service.view(id).subscribe(
        response => {
		
        },
        error => {
  
          this.alert.error(`ERROR: não foi possivel concluir a operação!`)
    
        })
	
  }
}
