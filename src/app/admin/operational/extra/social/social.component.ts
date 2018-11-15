import { Component, OnInit, Input } from '@angular/core';
import { Social } from './social.model';

import * as moment from 'moment';
import { ResourcesService } from 'src/app/shared/resources.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  @Input() parent
  @Input() table:string = 'users'

  public social: Social;
  public records

  constructor(private service: ResourcesService, private alert: SnotifyService) { }

  ngOnInit() {

    this.service.path = '/social'

    this.social = new Social(0, '', '', '', moment().format('DD/MM/YYYY HH:mm:ss'), moment().format('DD/MM/YYYY HH:mm:ss'), this.parent.id,  this.table, 1)

    this.list()
  }

  list() {

    this.service.parents({
      assets:this.table,
      parent:this.parent.id,
    }).list().subscribe(response => {

      this.records = response.rows

      this.social = new Social(0, '', '', '', moment().format('DD/MM/YYYY HH:mm:ss'), moment().format('DD/MM/YYYY HH:mm:ss'), this.parent.id,  this.table, 1)

    })

  }

  edit(record) {

    this.social = new Social(record.id, record.name, record.icone, record.value, record.created_at, record.updated_at, this.parent.id, record.assets, record.status)

  }

  delete(id) {

    this.service.path = '/social'
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
            }
            else {
              this.alert.error(response.error)
            }
            this.list()
      
          })
        }, bold: false },
        { text: 'Não', action: (toast) => this.alert.remove(toast.id) }
      ]
    })
  

  }
  onSubmit() {
    this.service.path = '/social'

    this.service.post(this.social).subscribe(response => {

      this.list()

      if (response.result) {

        this.alert.success(response.error)
      }
      else {

        this.alert.error(response.error)
      }


    })

  }

}
