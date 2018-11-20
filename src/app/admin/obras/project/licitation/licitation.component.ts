import { Component, OnInit, Input } from '@angular/core';
import { NotificationService } from 'src/app/shared/messages/notification.service';
import { ResourcesService } from 'src/app/shared/resources.service';
import { SnotifyService } from 'ng-snotify';
import { Licitation } from './licitation.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-licitation',
  templateUrl: './licitation.component.html',
  styleUrls: ['./licitation.component.css']
})
export class LicitationComponent implements OnInit {

  formLicitation: FormGroup
  
  @Input() licitacion
  @Input() project

  private licitationtMode: Licitation

  constructor(public notificationService: NotificationService, private service: ResourcesService, private alert: SnotifyService) { }

  
  ngOnInit() {

    this.formLicitation = new FormGroup({

      id: new FormControl(''),

      project_id: new FormControl(''),

      number_processo: new FormControl('', {

        validators: [Validators.required]

      }),
      modalidade: new FormControl('', {

        validators: [Validators.required]

      }),
      company: new FormControl('', {

        validators: [Validators.required]

      }),
      document: new FormControl('', {

        validators: [Validators.required]

      }),
      description: new FormControl(''),

      status: new FormControl(''),

      created_at: new FormControl(''),

      updated_at: new FormControl('')

    }, { validators: [], updateOn: 'blur' })

    this.load()

  }

  load() {

    if (this.licitacion) {
      this.licitationtMode = new Licitation(
        this.licitacion.id,
        this.licitacion.project_id,
        this.licitacion.number_processo,
        this.licitacion.modalidade,
        this.licitacion.company,
        this.licitacion.document,
        this.licitacion.description,
        this.licitacion.status,
        moment.unix(this.licitacion.created_at).format('DD/MM/YYYY HH:mm:ss'),
        moment().format('DD/MM/YYYY HH:mm:ss'))
    }
    else {
      this.licitationtMode = new Licitation(0, this.project, '', '', '', '', '', '0', moment().format('DD/MM/YYYY HH:mm:ss'), moment().format('DD/MM/YYYY HH:mm:ss'))
    }

    this.formLicitation.get('id').setValue(this.licitationtMode.id)
    this.formLicitation.get('project_id').setValue(this.licitationtMode.project_id)
    this.formLicitation.get('number_processo').setValue(this.licitationtMode.number_processo)
    this.formLicitation.get('modalidade').setValue(this.licitationtMode.modalidade)
    this.formLicitation.get('company').setValue(this.licitationtMode.company)
    this.formLicitation.get('document').setValue(this.licitationtMode.document)
    this.formLicitation.get('description').setValue(this.licitationtMode.description)
    this.formLicitation.get('status').setValue(this.licitationtMode.status)
    this.formLicitation.get('created_at').setValue(this.licitationtMode.created_at)
    this.formLicitation.get('updated_at').setValue( moment().format('DD/MM/YYYY HH:mm:ss'))

  }

  validate() {
    // Calling it:
    let formErrors = this.service.getErrors(this.formLicitation);

    console.log(formErrors)
  }
  onSubmit(value) {

    this.service.path = '/licitacoe';

    this.service.post(value).subscribe(response => {

      this.alert.success(response.error)

      this.formLicitation.get('id').setValue(response.result)
    },
      error => {

        this.alert.error(`ERROR: ${error.error}!`)

      })
  }

}
