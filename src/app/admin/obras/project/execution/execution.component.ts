import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/shared/messages/notification.service';
import { ResourcesService } from 'src/app/shared/resources.service';
import { SnotifyService } from 'ng-snotify';
import { Executation } from './executation.model';
import { Datepicker } from 'src/app/admin/utils/plugins/datepicker/datepicker.model';

@Component({
  selector: 'app-execution',
  templateUrl: './execution.component.html',
  styleUrls: ['./execution.component.css']
})
export class ExecutionComponent implements OnInit {

  formExecutation: FormGroup
  
  @Input() executation
  @Input() project

  public previsao_conclusao:Datepicker
  public data_medicao:Datepicker


  private licitationtMode: Executation

  constructor(public notificationService: NotificationService, private service: ResourcesService, private alert: SnotifyService) { }

  
  ngOnInit() {

    this.formExecutation = new FormGroup({

      id: new FormControl(''),

      project_id: new FormControl(''),

      data_medicao: new FormControl(''),

      percentual: new FormControl('', {

        validators: [Validators.required]

      }),
      previsao_conclusao: new FormControl(''),

      description: new FormControl(''),

      status: new FormControl(''),

      created_at: new FormControl(''),

      updated_at: new FormControl('')

    }, { validators: [], updateOn: 'blur' })

    this.load()

  }

  SelectDate(event) {

    console.log(event)
    this.formExecutation.get(event.field).setValue(event.data)

  }

  load() {

    if (this.executation) {
      this.licitationtMode = new Executation(
        this.executation.id,
        this.executation.project_id,
        this.executation.percentual,
        moment.unix(this.executation.data_medicao).format('YYYY-MM-DD'),       
        moment.unix(this.executation.previsao_conclusao).format('YYYY-MM-DD'),
        this.executation.description,
        this.executation.status,
        moment.unix(this.executation.created_at).format('DD/MM/YYYY HH:mm:ss'),
        moment().format('DD/MM/YYYY HH:mm:ss'))

        this.previsao_conclusao = new Datepicker()
        this.previsao_conclusao.year = moment.unix(this.executation.previsao_conclusao).year()
        this.previsao_conclusao.month = moment.unix(this.executation.previsao_conclusao).month()
        this.previsao_conclusao.day = moment.unix(this.executation.previsao_conclusao).day()
        this.data_medicao = new Datepicker()
        this.data_medicao.year = moment.unix(this.executation.data_medicao).year()
        this.data_medicao.month = moment.unix(this.executation.data_medicao).month()
        this.data_medicao.day = moment.unix(this.executation.data_medicao).day()
    }
    else {
      this.licitationtMode = new Executation(0, this.project, '', moment().format('YYYY-MM-DD'), moment().format('YYYY-MM-DD'), '', '0', moment().format('DD/MM/YYYY HH:mm:ss'), moment().format('DD/MM/YYYY HH:mm:ss'))
    }

    this.formExecutation.get('id').setValue(this.licitationtMode.id)
    this.formExecutation.get('project_id').setValue(this.licitationtMode.project_id)
    this.formExecutation.get('data_medicao').setValue(this.licitationtMode.data_medicao)
    this.formExecutation.get('percentual').setValue(this.licitationtMode.percentual)
    this.formExecutation.get('previsao_conclusao').setValue(this.licitationtMode.previsao_conclusao)
    this.formExecutation.get('description').setValue(this.licitationtMode.description)
    this.formExecutation.get('status').setValue(this.licitationtMode.status)
    this.formExecutation.get('created_at').setValue(this.licitationtMode.created_at)
    this.formExecutation.get('updated_at').setValue(this.licitationtMode.updated_at)

  }

  validate() {
    // Calling it:
    let formErrors = this.service.getErrors(this.formExecutation);

    console.log(formErrors)
  }
  onSubmit(value) {

    this.service.path = '/execucoe';

    this.service.post(value).subscribe(response => {

      this.alert.success(response.error)

      this.formExecutation.get('id').setValue(response.result)
    },
      error => {

        this.alert.error(`ERROR: ${error.error}!`)

      })
  }

}
