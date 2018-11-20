import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/shared/messages/notification.service';
import { ResourcesService } from 'src/app/shared/resources.service';
import { SnotifyService } from 'ng-snotify';
import { Conclusion } from './conclusion.model';

import {RadioOption} from 'src/app/shared/input/input-radio/radio-option.model'

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css']
})
export class ConclusionComponent implements OnInit {

  formConclusion: FormGroup
  
  public status = 1

  paymentOptions: RadioOption[] = [
    {label: 'Não apresentada', value: '1'},
    {label: 'Em análise', value: '2'},
    {label: 'Aprovada', value: '3'},
    {label: 'Rejeitada', value: '4'},
  ]

  @Input() conclusion
  @Input() project

  public images:any

  private conclusionMode: Conclusion

  public afuConfig

  constructor(public notificationService: NotificationService, private service: ResourcesService, private alert: SnotifyService) { }

  
  ngOnInit() {


    this.formConclusion = new FormGroup({

      id: new FormControl(''),

      project_id: new FormControl(''),

      description: new FormControl(''),

      status: new FormControl(''),

      created_at: new FormControl(''),

      updated_at: new FormControl('')

    }, { validators: [], updateOn: 'blur' })

    this.load()

  }

  load() {

    console.log(this.project)

    if (this.conclusion) {
      this.conclusionMode = new Conclusion(
        this.conclusion.id,
        this.conclusion.project_id,
        this.conclusion.description,
        this.conclusion.status,
        moment.unix(this.conclusion.created_at).format('DD/MM/YYYY HH:mm:ss'),
        moment().format('DD/MM/YYYY HH:mm:ss'),
        this.conclusion.images)
       this.status = this.conclusion.status
    }
    else {
      this.conclusionMode = new Conclusion(0, this.project, '', this.status, moment().format('DD/MM/YYYY HH:mm:ss'), moment().format('DD/MM/YYYY HH:mm:ss'),null)
    }

    this.formConclusion.get('id').setValue(this.conclusionMode.id)
    this.formConclusion.get('project_id').setValue(this.conclusionMode.project_id)
    this.formConclusion.get('description').setValue(this.conclusionMode.description)
    this.formConclusion.get('status').setValue(this.status)
    this.formConclusion.get('created_at').setValue(this.conclusionMode.created_at)
    this.formConclusion.get('updated_at').setValue(moment().format('DD/MM/YYYY HH:mm:ss'))

    this.images = this.conclusion.images

    this.afuConfig = {
      assets: 'conclusoes',
      parent: this.conclusionMode.id,
      multiple: true,
      formatsAllowed: ".jpg,.png",
      maxSize: "1",
      uploadAPI:  {
        url:`${this.service.baseUrl}/api/image/uploads`
      },
      hideProgressBar: false,
      hideResetBtn: false,
      hideSelectBtn: false
    };


  }

  DocUpload(event){

    this.images = JSON.parse(event.responseText)

  }

  img(src){

    return `${this.service.baseUrl}${src}`;

  }

  excluirImage(id){

    this.service.path = '/image'
    this.alert.confirm('Deseja realmente excluir o registro', 'Alerta!!', {
      timeout: 5000,
      showProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      buttons: [
        { text: 'Sim', action: (toast) => {

          this.alert.remove(toast.id)

          this.service.delete(id).subscribe(response => {

            if (response.result) {
              this.alert.success(response.error)

              this.images = response.images
            }
            else {
              this.alert.error(response.error)
            }
           
      
          })
        }, bold: false },
        { text: 'Não', action: (toast) => this.alert.remove(toast.id) }
      ]
    })
  }

  validate() {
    // Calling it:
    let formErrors = this.service.getErrors(this.formConclusion);

  }
  onSubmit(value) {

    this.service.path = '/conclusoe';

    this.service.post(value).subscribe(response => {

      this.alert.success(response.error)

      this.formConclusion.get('id').setValue(response.result)
    },
      error => {

        this.alert.error(`ERROR: ${error.error}!`)

      })
  }

}
