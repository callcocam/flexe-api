/**
 * Componente de edição de role.
 *
 * @author Cludio Campos <contato@sigasmart.com.br>
 * @since 0.0.1
 */

import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/messages/notification.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResourcesService } from 'src/app/shared/resources.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'call-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {

  formGroup: FormGroup

  public dataRoles
  public roles

  constructor(public notificationService: NotificationService,
    private activateRoute: ActivatedRoute,
    private service: ResourcesService,
    private alert: SnotifyService) { }

  ngOnInit() {

    this.formGroup = new FormGroup({

      id: new FormControl(''),

      name: new FormControl('', {

        validators: [Validators.required]

      }),

      alias: new FormControl(''),

      role_id: new FormControl('', {

        validators: [Validators.required]

      }),

      is_admin: new FormControl(''),
      
      description: new FormControl(''),

      status: new FormControl(''),

      //Aqui vai os outros campos 

      created_at: new FormControl('', {

        validators: [Validators.required]

      }),

      updated_at: new FormControl('', {

        validators: [Validators.required]

      })

    }, { validators: [], updateOn: 'blur' })

    this.getItem();
  }

  getItem() {

    let id = this.activateRoute.snapshot.params['id'];
    if (id) {
      this.service.path = '/role';

      this.service.edit(id).subscribe(
        response => {
          this.formGroup.get('id').setValue(response.id)
          //Aqui vai os outros campos 
          this.formGroup.get('name').setValue(response.name)
          this.formGroup.get('role_id').setValue(response.role_id)
          this.formGroup.get('is_admin').setValue(response.is_admin)
          this.formGroup.get('description').setValue(response.description)
          this.formGroup.get('status').setValue(response.status)
          this.formGroup.get('created_at').setValue(response.created_at)
          this.formGroup.get('updated_at').setValue(response.updated_at)

          this.roles = response
          this.dataRoles = response.role_id
          
        },
        error => {

          this.alert.error(`ERROR: não foi possivel concluir a operação!`)

        })
    }

  }


onSelect(event){

  this.formGroup.get('role_id').setValue(event)

}
  onSubmit(value) {

    this.service.post(value).subscribe(response => {

      this.alert.success(response.error)

    },
      error => {

        this.alert.error(`ERROR: ${error.error}!`)

      })
  }

}
