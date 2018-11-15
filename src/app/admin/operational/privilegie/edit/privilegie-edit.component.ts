/**
 * Componente de edição de privilegie.
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
import * as moment from 'moment';

@Component({
  selector: 'call-privilegie-edit',
  templateUrl: './privilegie-edit.component.html',
  styleUrls: ['./privilegie-edit.component.css']
})
export class PrivilegieEditComponent implements OnInit {

	formGroup: FormGroup

	public roles
	
  public roleId
  
	public resourceId
	
  constructor(public notificationService: NotificationService,
    private activateRoute: ActivatedRoute,
    private service: ResourcesService,
    private alert: SnotifyService) { }

  ngOnInit() {

    this.formGroup = new FormGroup({

      id: new FormControl(''),

      alias: new FormControl(''),

      role_id: new FormControl('', {

        validators: [Validators.required]

      }),

      resource_id: new FormControl('', {

        validators: [Validators.required]

      }),

      name: new FormControl('', {

        validators: [Validators.required]

      }),

      description: new FormControl(''),

      status: new FormControl(''),

      created_at: new FormControl(''),

      updated_at: new FormControl('')

    }, { validators: [], updateOn: 'blur' })

    this.getItem();
  }


  onSelectRole(event){

    this.formGroup.get('role_id').setValue(event)
  
  }

  

onSelectResource(event){

  this.formGroup.get('resource_id').setValue(event)

}

  getItem() {

    let id = this.activateRoute.snapshot.params['id'];

    if(id){
      this.service.path = '/privilegie';

      this.service.edit(id).subscribe(
        response => {
		  this.formGroup.get('id').setValue(response.id)
		  //Aqui vai os outros campos 
          this.formGroup.get('name').setValue(response.name)
          this.formGroup.get('alias').setValue(response.alias)
          this.formGroup.get('role_id').setValue(response.role_id)
          this.formGroup.get('resource_id').setValue(response.resource_id)
          this.formGroup.get('status').setValue(response.status)
          this.formGroup.get('created_at').setValue(response.created_at)
          this.formGroup.get('updated_at').setValue(moment().format('DD/MM/YYYY HH:mm:ss'))
		  
		  this.roles = response
		  
      this.roleId = response.role_id
      
		  this.resourceId = response.resource_id
		  
		  
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
