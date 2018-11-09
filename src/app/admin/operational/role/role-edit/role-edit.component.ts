import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NotificationService } from 'src/app/shared/messages/notification.service';
import { ActivatedRoute } from '@angular/router';
import { ResourcesService } from 'src/app/shared/resources.service';
import { SnotifyService } from 'ng-snotify';
import { RadioOption } from 'src/app/shared/input/input-radio/radio-option.model';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {

  formGroup: FormGroup


  constructor(private formBuilder: FormBuilder,
    public notificationService: NotificationService,
    private activateRoute: ActivatedRoute,
    private service: ResourcesService,
    private alert: SnotifyService) { }

  ngOnInit() {

    this.formGroup = new FormGroup({
      id: new FormControl(''),
      role_id: new FormControl(''),
      name: new FormControl('', {
        validators: [Validators.required]
      }),
      alias: new FormControl(''),
      is_admin: new FormControl(''),
      description: new FormControl(''),
      status: new FormControl('', {
        validators: [Validators.required]
      }),
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

    this.service.path = '/role';

    this.service.edit(id).subscribe(
      response => {
        this.formGroup.get('id').setValue(response.id)
        this.formGroup.get('name').setValue(response.name)
        this.formGroup.get('role_id').setValue(response.role_id)
        this.formGroup.get('alias').setValue(response.alias)
        this.formGroup.get('is_admin').setValue(response.is_admin)
        this.formGroup.get('description').setValue(response.description)
        this.formGroup.get('status').setValue(response.status)
        this.formGroup.get('created_at').setValue(response.created_at)
        this.formGroup.get('updated_at').setValue(response.updated_at)
      },
      error => {

        this.alert.error(`ERROR: não foi possivel concluir a operação!`)

        // this.alert.error(`ERROR: ${error.status}-${error.statusText}!`).on('beforeHide',(toast: Snotify) => {

        //    this.service.logout();

        // } )

        // this.service.refreshToken();

      })

  }

  onSubmit(value) {

    this.service.post(value).subscribe(response => {

      this.alert.success(response.error)

    },
      error => {

        this.alert.error(`ERROR: ${error.error}!`)

        // this.service.refreshToken();

      })
  }

}
