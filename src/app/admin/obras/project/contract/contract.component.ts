import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/shared/messages/notification.service';
import { ResourcesService } from 'src/app/shared/resources.service';
import { SnotifyService } from 'ng-snotify';
import { Contract } from './contract.model';
import * as moment from 'moment';
import { Datepicker } from 'src/app/admin/utils/plugins/datepicker/datepicker.model';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  formContract: FormGroup

  @Input() contract
  @Input() project

  public vigencia: Datepicker;
  public contratacao: Datepicker;

  private contractMode: Contract

  constructor(public notificationService: NotificationService,
    private service: ResourcesService,
    private alert: SnotifyService) { }

  ngOnInit() {

    this.formContract = new FormGroup({

      id: new FormControl(''),

      project_id: new FormControl(''),

      convenio: new FormControl('', {

        validators: [Validators.required]

      }),
      convenio_siafi: new FormControl('', {

        validators: [Validators.required]

      }),
      proposta: new FormControl('', {

        validators: [Validators.required]

      }),
      programa: new FormControl('', {

        validators: [Validators.required]

      }),
      vigencia: new FormControl('', {

        validators: [Validators.required]

      }),
      contratacao: new FormControl('', {

        validators: [Validators.required]

      }),
      publicacao: new FormControl('', {

        validators: [Validators.required]

      }),
      investimento: new FormControl('', {

        validators: [Validators.required]

      }),
      repasse: new FormControl('', {

        validators: [Validators.required]

      }),
      contrapartida: new FormControl('', {

        validators: [Validators.required]

      }),

      description: new FormControl(''),

      status: new FormControl(''),

      created_at: new FormControl(''),

      updated_at: new FormControl('')

    }, { validators: [], updateOn: 'blur' })

    this.load()

  }
  SelectDate(event) {

    console.log(event)
    this.formContract.get(event.field).setValue(event.data)

  }
  load() {

    if (this.contract) {
      this.contractMode = new Contract(
        this.contract.id,
        this.contract.project_id,
        this.contract.convenio,
        this.contract.convenio_siafi,
        this.contract.proposta,
        this.contract.programa,
        moment.unix(this.contract.vigencia).format('YYYY-MM-DD'),
        moment.unix(this.contract.contratacao).format('YYYY-MM-DD'),
        this.contract.publicacao,
        this.contract.investimento,
        this.contract.repasse,
        this.contract.contrapartida,
        this.contract.description,
        this.contract.status,
        moment.unix(this.contract.created_at).format('DD/MM/YYYY HH:mm:ss'),
        moment().format('DD/MM/YYYY HH:mm:ss'))

      this.contratacao = new Datepicker()
      this.contratacao.year = moment.unix(this.contract.contratacao).year()
      this.contratacao.month = moment.unix(this.contract.contratacao).month()
      this.contratacao.day = moment.unix(this.contract.contratacao).day()

      this.vigencia = new Datepicker()
      this.vigencia.year = moment.unix(this.contract.vigencia).year()
      this.vigencia.month = moment.unix(this.contract.vigencia).month()
      this.vigencia.day = moment.unix(this.contract.vigencia).day()

    }
    else {
      this.contractMode = new Contract(0, this.project, '', '', '', '', moment().format('YYYY-MM-DD'), moment().format('YYYY-MM-DD'), '', '', '', '', '', '0', moment().format('DD/MM/YYYY HH:mm:ss'), moment().format('DD/MM/YYYY HH:mm:ss'))
    }

    this.formContract.get('id').setValue(this.contractMode.id)
    this.formContract.get('project_id').setValue(this.contractMode.project_id)
    this.formContract.get('convenio').setValue(this.contractMode.convenio)
    this.formContract.get('convenio_siafi').setValue(this.contractMode.convenio_siafi)
    this.formContract.get('proposta').setValue(this.contractMode.proposta)
    this.formContract.get('programa').setValue(this.contractMode.programa)
    this.formContract.get('vigencia').setValue(this.contractMode.vigencia)
    this.formContract.get('contratacao').setValue(this.contractMode.contratacao)
    this.formContract.get('publicacao').setValue(this.contractMode.publicacao)
    this.formContract.get('investimento').setValue(this.contractMode.investimento)
    this.formContract.get('repasse').setValue(this.contractMode.repasse)
    this.formContract.get('contrapartida').setValue(this.contractMode.contrapartida)
    this.formContract.get('description').setValue(this.contractMode.description)
    this.formContract.get('status').setValue(this.contractMode.status)
    this.formContract.get('created_at').setValue(this.contractMode.created_at)
    this.formContract.get('updated_at').setValue(this.contractMode.updated_at)



  }

  validate() {
    // Calling it:
    let formErrors = this.service.getErrors(this.formContract);

    console.log(formErrors)
  }
  onSubmit(value) {

    this.service.path = '/contrato';

    this.service.post(value).subscribe(response => {

      this.alert.success(response.error)

      this.formContract.get('id').setValue(response.result)
    },
      error => {

        this.alert.error(`ERROR: ${error.error}!`)

      })
  }

}
