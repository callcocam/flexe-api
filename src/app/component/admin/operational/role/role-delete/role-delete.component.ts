import { Component, OnInit } from '@angular/core';
import { Snotify, SnotifyService } from 'ng-snotify';
import { NotificationService } from 'src/app/shared/messages/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourcesService } from 'src/app/shared/resources.service';

@Component({
  selector: 'app-role-delete',
  templateUrl: './role-delete.component.html',
  styleUrls: ['./role-delete.component.css']
})
export class RoleDeleteComponent implements OnInit {

  redirectAfterDelete = ['/admin/roles'];

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

    this.service.path = '/role';

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

    this.service.path = '/role';

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