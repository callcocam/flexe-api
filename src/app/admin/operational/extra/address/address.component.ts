import { Component, OnInit, Input } from '@angular/core';

import * as moment from 'moment';
import { Address } from './address.model';
import { ResourcesService } from 'src/app/shared/resources.service';
import { SnotifyService } from 'ng-snotify';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  
  @Input() parent
  @Input() table:string = 'users'

  public address: Address;
  public records

  constructor(private service: ResourcesService, private alert: SnotifyService) { }

  ngOnInit() {

    this.service.path = '/addres'

    this.address = new Address(0,this.parent.id, this.table, '','','','',0,'','','','','','','',1, moment().format('DD/MM/YYYY HH:mm:ss'), moment().format('DD/MM/YYYY HH:mm:ss'))

    this.list()
  }

  list() {

    this.service.parents({
      assets:this.table,
      parent:this.parent.id,
    }).list().subscribe(response => {

      this.records = response.rows

      this.address = new Address(0,this.parent.id, this.table, '','','','',0,'','','','','','','',1, moment().format('DD/MM/YYYY HH:mm:ss'), moment().format('DD/MM/YYYY HH:mm:ss'))


    })

  }

  edit(record) {

    this.address = new Address(record.id,this.parent.id,record.assets,record.name,record.alias,record.street,record.district,record.number,record.complements,record.zip,record.city,record.state,record.country,record.latitude,record.lomgetude,1, moment().format('DD/MM/YYYY HH:mm:ss'), moment().format('DD/MM/YYYY HH:mm:ss'))


  }

  delete(id) {

    this.service.path = '/addres'
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
    this.service.path = '/addres'

    this.service.post(this.address).subscribe(response => {

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
