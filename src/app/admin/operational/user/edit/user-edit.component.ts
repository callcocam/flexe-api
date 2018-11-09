/**
 * Componente de edição de user.
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
  selector: 'call-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  formGroup: FormGroup


  file: File

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

      //Aqui vai os outros campos 
      role_id: new FormControl('', {

        validators: [Validators.required]

      }),

      email: new FormControl('', {

        validators: [Validators.required]

      }),


      description: new FormControl(''),


      cover: new FormControl(''),

      status: new FormControl(''),


      created_at: new FormControl('', {

        validators: [Validators.required]

      }),

      updated_at: new FormControl('', {

        validators: [Validators.required]

      })

    }, { validators: [], updateOn: 'blur' })

    this.getItem();
  }

  SelectedFile(event) {

    this.file = event

  }

  getItem() {

    let id = this.activateRoute.snapshot.params['id'];

    if (id) {
      this.service.path = '/user';

      this.service.edit(id).subscribe(
        response => {
          this.formGroup.get('id').setValue(response.id)
          //Aqui vai os outros campos 
          this.formGroup.get('name').setValue(response.name)
          this.formGroup.get('role_id').setValue(response.role_id)
          this.formGroup.get('email').setValue(response.email)
          this.formGroup.get('cover').setValue(response.cover)
          this.formGroup.get('description').setValue(response.description)
          this.formGroup.get('status').setValue(response.status)
          this.formGroup.get('created_at').setValue(response.created_at)
          this.formGroup.get('updated_at').setValue(response.updated_at)
        },
        error => {

          this.alert.error(`ERROR: não foi possivel concluir a operação!`)

        })
    }

  }

  onSubmit(value) {

    this.service.post(value, this.file).subscribe(response => {

      this.alert.success(response.error)

    },
      error => {

        this.alert.error(`ERROR: ${error.error}!`)

      })
  }

}}
