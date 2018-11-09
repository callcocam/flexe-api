import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/messages/notification.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResourcesService } from 'src/app/shared/resources.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-resource-edit',
  templateUrl: './resource-edit.component.html',
  styleUrls: ['./resource-edit.component.css']
})
export class ResourceEditComponent implements OnInit {

  formGroup: FormGroup


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

      route: new FormControl('', {

        validators: [Validators.required]

      }),
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

    console.log(id)
    if(id){
      this.service.path = '/resourse';

      this.service.edit(id).subscribe(
        response => {
          this.formGroup.get('id').setValue(response.id)
          this.formGroup.get('name').setValue(response.name)
          this.formGroup.get('route').setValue(response.route)
          this.formGroup.get('alias').setValue(response.alias)
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

    this.service.post(value).subscribe(response => {

      this.alert.success(response.error)

    },
      error => {

        this.alert.error(`ERROR: ${error.error}!`)
        
      })
  }

}
