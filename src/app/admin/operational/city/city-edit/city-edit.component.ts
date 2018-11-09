import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/messages/notification.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RadioOption } from 'src/app/shared/input/input-radio/radio-option.model';
import { ActivatedRoute } from '@angular/router';
import { ResourcesService } from 'src/app/shared/resources.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html'
})
export class CityEditComponent implements OnInit {

  formGroup: FormGroup

  file: File

  paymentOptions: RadioOption[] = [
    { label: 'Habilitado Para Uso', value: '1' },
    { label: 'Desabilitado Para Uso', value: '0' }
  ]

  constructor(public notificationService: NotificationService,
    private activateRoute: ActivatedRoute,
    private service: ResourcesService,
    private alert: SnotifyService) { }

  ngOnInit() {

    this.formGroup = new FormGroup({
      id: new FormControl(''),
      company_id: new FormControl(''),
      name: new FormControl('', {
        validators: [Validators.required]
      }),
      cover: new FormControl(''),
      uf: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(2)]
      }),
      cuf: new FormControl('', {
        validators: [Validators.required]
      }),
      ibge: new FormControl(''),
      zip: new FormControl('', {
        validators: [Validators.required]
      }),
      cpais: new FormControl('', {
        validators: [Validators.required]
      }),
      xpais: new FormControl('', {
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
    },{validators: [],  updateOn: 'blur' })

    this.getItem();
  }

  SelectedFile(event) {

    this.file = event

  }

  getItem() {

    let id = this.activateRoute.snapshot.params['id'];

    this.service.path = '/city';

    this.service.edit(id).subscribe(
      response => {
        this.formGroup.get('id').setValue(response.id)
        this.formGroup.get('name').setValue(response.name)
        this.formGroup.get('uf').setValue(response.uf)
        this.formGroup.get('cuf').setValue(response.cuf)
        this.formGroup.get('ibge').setValue(response.ibge)
        this.formGroup.get('zip').setValue(response.zip)
        this.formGroup.get('cpais').setValue(response.cpais)
        this.formGroup.get('xpais').setValue(response.xpais)
        this.formGroup.get('cover').setValue(response.cover)
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
    
    this.service.post(value, this.file).subscribe(response=>{

      this.alert.success(response.error)

    },
      error => {

        this.alert.error(`ERROR: ${error.error}!`)

       // this.service.refreshToken();

      })
  }

}
