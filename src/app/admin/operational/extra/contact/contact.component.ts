/**
 * Componente de listagem de contacts.
 *
 * @author Claudio Campos <contato@sigasmart.com.br>
 * @since 0.0.3
 */

import { Component, OnInit, Input } from '@angular/core';
import { ResourcesService } from '../../../../shared/resources.service';
import { SnotifyService, Snotify } from 'ng-snotify';
import { Contact } from './contact.model';
import * as moment from 'moment';

@Component({
  selector: 'call-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {


  @Input() parent
  @Input() table:string = 'users'

  public contact: Contact;
  public records

  constructor(private service: ResourcesService, private alert: SnotifyService) { }

  ngOnInit() {

    this.service.path = '/contact'

    this.contact = new Contact(0, '', '', '', moment().format('DD/MM/YYYY HH:mm:ss'), moment().format('DD/MM/YYYY HH:mm:ss'), this.parent.id,  this.table, 1)

    this.list()
  }

  list() {

   this.service.parents({
      assets:this.table,
      parent:this.parent.id,
    }).list().subscribe(response => {

      this.records = response.rows

      this.contact = new Contact(0, '', '', '', moment().format('DD/MM/YYYY HH:mm:ss'), moment().format('DD/MM/YYYY HH:mm:ss'), this.parent.id,  this.table, 1)

    })

  }

  edit(record) {

    this.contact = new Contact(record.id, record.name, record.icone, record.value, record.created_at, record.updated_at, this.parent.id, record.assets, record.status)

  }

  delete(id) {

    this.service.path = '/contact'
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
    this.service.path = '/contact'

    this.service.post(this.contact).subscribe(response => {

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
