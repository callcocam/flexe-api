/**
 * Componente de edição de companie.
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
  selector: 'call-companie-edit',
  templateUrl: './companie-edit.component.html',
  styleUrls: ['./companie-edit.component.css']
})
export class CompanieEditComponent implements OnInit {

  formGroup: FormGroup

  public companie

  cover:string = 'https://dubsism.files.wordpress.com/2017/12/image-not-found.png?w=547';

  file: File

  public navs = [
    {index:'address',label:"Endereços"},
    {index:'document',label:"Documentos"},
    {index:'contact',label:"Contatos"},
    {index:'soscial',label:"Social"},
  ]

  constructor(public notificationService: NotificationService,
    private activateRoute: ActivatedRoute,
    private service: ResourcesService,
    private alert: SnotifyService) { }

  ngOnInit() {

    this.formGroup = new FormGroup({

      id: new FormControl(''),

      cover: new FormControl(''),

      alias: new FormControl(''),
      
      description: new FormControl(''),

      name: new FormControl('', {

        validators: [Validators.required]

    }), 
      type: new FormControl(''),
	  
	  //Aqui vai os outros campos 
	  
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

  getItem() {

    let id = this.activateRoute.snapshot.params['id'];
    
    if(id){
      this.service.path = '/companie';

      this.service.edit(id).subscribe(
        response => {
          this.formGroup.get('id').setValue(response.id)
          //Aqui vai os outros campos 
          this.formGroup.get('type').setValue(response.type)
          this.formGroup.get('alias').setValue(response.alias)
          this.formGroup.get('name').setValue(response.name)
          this.formGroup.get('cover').setValue(response.cover)
          this.formGroup.get('description').setValue(response.description)
          this.formGroup.get('status').setValue(response.status)
          this.formGroup.get('created_at').setValue(moment(response.created_at).format('DD/MM/YYYY HH:mm:ss'))
          this.formGroup.get('updated_at').setValue(moment().format('DD/MM/YYYY HH:mm:ss'))

          this.companie = response

          if(response.cover){

            this.cover =  `${this.service.baseUrl}${response.cover}`

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

    this.service.path = '/companie';

    this.service.post(value,this.file).subscribe(response => {

      this.alert.success(response.error)

    },
      error => {

        this.alert.error(`ERROR: ${error.error}!`)
        
      })
  }

}
