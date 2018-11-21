/**
 * Componente de edição de project.
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
import { AuthService } from 'src/app/admin/auth/auth.service';
import {RadioOption} from 'src/app/shared/input/input-radio/radio-option.model'

@Component({
  selector: 'call-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  formGroup: FormGroup

  file: File

  cover:string = ''

  public project_id
  public contract
  public conclusion
  public execution
  public licitacion


statusOptions: RadioOption[] = [
    {label: 'Não iniciada', value: '1'},
    {label: 'Em andamento', value: '2'},
    {label: 'Concluída', value: '3'}
  ]
  constructor(public notificationService: NotificationService,
    private activateRoute: ActivatedRoute,
    private service: ResourcesService,
    private alert: SnotifyService,
    private authService:AuthService) { }

  ngOnInit() {

    let user = this.authService.localStorage.getObject(this.authService.USER_KEY)

    this.formGroup = new FormGroup({

      id: new FormControl(''),

      alias: new FormControl(''),

      user_id: new FormControl(user.id),

      name: new FormControl('', {

        validators: [Validators.required]

      }),

      description: new FormControl(''),

      cover: new FormControl(''),

      status: new FormControl(''),

      created_at: new FormControl(''),

      updated_at: new FormControl('')

    }, { validators: [], updateOn: 'blur' })

    this.getItem();
  }

  getItem() {

    let id = this.activateRoute.snapshot.params['id']

    if (id) {
      this.service.path = '/project';
        
      this.service.edit(id).subscribe(
        response => {
          this.formGroup.get('id').setValue(response.id)
          //Aqui vai os outros campos 
          this.formGroup.get('user_id').setValue(response.user_id)
          this.formGroup.get('name').setValue(response.name)
          this.formGroup.get('alias').setValue(response.alias)
          this.formGroup.get('cover').setValue(response.cover)
          this.formGroup.get('description').setValue(response.description)
          this.formGroup.get('status').setValue(response.status)
          this.formGroup.get('created_at').setValue(moment.unix(response.created_at).format('DD/MM/YYYY HH:mm:ss'))
          this.formGroup.get('updated_at').setValue(moment().format('DD/MM/YYYY HH:mm:ss'))
          this.project_id = response.id
		  
          this.contract = response.contract
          this.conclusion = response.conclusion
          this.execution = response.execution
          this.licitacion = response.licitacion
          if(response.cover){
            
            this.cover =  this.service.src(response.cover)

          }
         

        },
        error => {

          this.alert.error(`ERROR: não foi possivel concluir a operação!`)

        })
    }

  }

  SelectedFile(event){

    this.file = event

  }

  onSubmit(value) {

    this.service.path = '/project';

    this.service.post(value,this.file).subscribe(response => {

      this.alert.success(response.error)

      this.project_id = response.result

      this.formGroup.get('id').setValue(response.result)

    },
      error => {

        this.alert.error(`ERROR: ${error.error}!`)

      })
  }

}
