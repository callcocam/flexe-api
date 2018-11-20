/**
 * Componente de cadastro de projects.
 *
 * @author Claudio Campos <contato@sigasmart.com.br>
 * @since 0.0.1
 */

import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/messages/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourcesService } from 'src/app/shared/resources.service';
import { SnotifyService, Snotify } from 'ng-snotify';

@Component({
  selector: 'call-project-delete',
  templateUrl: './project-delete.component.html',
  styleUrls: ['./project-delete.component.css']
})
export class ProjectDeleteComponent implements OnInit {

  redirectAfterDelete = ['/admin/projects'];

  constructor( public notificationService: NotificationService,
    private activateRoute: ActivatedRoute,
    private service: ResourcesService,
    private alert: SnotifyService,
    private router: Router) { }

    public data;

  ngOnInit() {

    this.getItem()

  }

  getItem() {

    let id = this.activateRoute.snapshot.params['id'];

    this.service.path = '/project';

    this.service.edit(id).subscribe(      
      response => {

       this.data = response

      },
      error => {

        this.alert.error(`ERROR: não foi possivel concluir a operação!`)

        // this.alert.error(`ERROR: ${error.status}-${error.statusText}!`).on('beforeHide',(toast: Snotify) => {

        //    this.service.logout();

        // } )

        // this.service.refreshToken();

      })

  }

  deleteFrom(){

    let id = this.activateRoute.snapshot.params['id'];

    this.service.path = '/project';

    this.service.delete(id).subscribe(response => {

         this.alert.success(`SUCESSO: ${response.error}!`).on('beforeHide',(toast: Snotify) => {

          this.router.navigate(this.redirectAfterDelete)

         } )

      },
      error => {

        this.alert.error(`ERROR: não foi possivel concluir a operação!`)

        // this.alert.error(`ERROR: ${error.status}-${error.statusText}!`).on('beforeHide',(toast: Snotify) => {

        //    this.service.logout();

        // } )

        // this.service.refreshToken();

      })
  }

}
